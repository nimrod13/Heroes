import { Component, AfterViewInit, ViewChildren, QueryList, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DtPagination } from '@dynatrace/barista-components/pagination';
import { DtTableDataSource, DtSort, DtTableSearch, DtTable } from '@dynatrace/barista-components/table';
import { startWith } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
  animations: [
    trigger('table', [
      state('enter', style({
        transform: 'translateX(0)'
      })),
      state('hide', style({
        transform: 'translateX(100px)'
      })),
      transition('* => hide', [
        animate(1400, keyframes([
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 0
          }),
          style({
            transform: 'translateX(20px)',
            opacity: 0.9,
            offset: 0.3
          }),
          style({
            transform: 'translateX(35px)',
            opacity: 0.7,
            offset: 0.5
          }),
          style({
            transform: 'translateX(50px)',
            opacity: 0.5,
            offset: 0.7
          }),
          style({
            transform: 'translateX(100px)',
            opacity: 0,
            offset: 1
          })
        ]))
      ]),
    ]),
  ]
})

export class DynamicTableComponent implements AfterViewInit, OnInit, OnDestroy {
  private data: Hero[] | any;

  // Get the viewChild to pass the sorter reference to the datasource.
  @ViewChild('sortable', { read: DtSort, static: true }) sortable: DtSort;
  @ViewChild(DtPagination, { static: true }) pagination: DtPagination;
  @ViewChild('heroesTable') heroesTable: DtTable<any>;
  @ViewChildren(DtPagination) paginationList: QueryList<DtPagination>;
  @ViewChild(DtTableSearch, { static: true }) tableSearch: DtTableSearch;

  // Initialize the table's data source
  public dataSource: DtTableDataSource<{
    id: number;
    name: string;
    nickname?: string;
  }>;

  subscription: Subscription;
  searchValue = '';

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    const heroesLocal: Hero[] = this.heroService.tryGetHeroes();
    if (!heroesLocal) {
      this.heroService.getHeroes().subscribe(h => this.onGetHeroes(h));
    } else {
      this.onGetHeroes(heroesLocal);
    }
  }

  add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    const heroesLocal: Hero[] = this.heroService.tryGetHeroes();
    const maxId = Math.max.apply(null, heroesLocal.map(h => h.id));
    const newHero: Hero = {
      name, id: maxId + 1, series: {}, stories: {}, nickname: name,
      description: '', modified: new Date().toString(), resourceURI: '', comics: {}, events: {}, urls: [],
      thumbnail: { path: 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available', extension: 'jpg' }
    };

    heroesLocal.push(newHero);
    this.heroService.addHero(newHero).subscribe(() => this.heroService.setHeroes(heroesLocal));
    // this.scrollToBottom();
  }

  updateDataSource(heroes: Hero[]): void {
    let goToEnd: boolean;
    if (this.data && heroes.length > this.data.length) {
      goToEnd = true;
    }

    const isNewPage = this.data.length % this.pagination.pageSize === 0;
    this.initTable(heroes);

    if (goToEnd) {
      this.pagination.currentPage = isNewPage ? this.pagination.numberOfPages + 1 : this.pagination.numberOfPages;
      this.dataSource.pagination = this.paginationList.last;
    }

    this.paginationChanges();
  }

  initTable(heroes: any): void {
    this.data = heroes;
    this.dataSource = new DtTableDataSource(heroes);
    this.dataSource.sort = this.sortable;
    this.dataSource.search = this.tableSearch;
    this.dataSource.pagination = this.pagination;
    this.dataSource.pageSize = 20;
  }

  private onGetHeroes(heroes: Hero[]): void {
    heroes.map(h => h.nickname = h.nickname || h.name);
    this.initTable(heroes);
  }

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.sort = this.sortable;
      this.dataSource.search = this.tableSearch;
      this.paginationChanges();
    }

    this.subscription = this.heroService.heroesChanged.subscribe((heroes: Hero[]) => this.updateDataSource(heroes));
  }

  paginationChanges() {
    this.paginationList.changes.pipe(startWith(null)).subscribe(() => {
      if (this.paginationList.first) {
        this.dataSource.pagination = this.paginationList.first;
        this.dataSource.pageSize = 20;
      } else {
        this.dataSource.pagination = null;
      }
    });
  }

  deleteHero(id: number, row: any): void {
    row.isDeleted = true;
    let heroesLocal = this.data || this.heroService.tryGetHeroes();
    this.heroService.getHeroIndex(id).subscribe((index: number) => {
      heroesLocal = heroesLocal.filter((h: Hero) => h.id !== id);
      this.heroService.deleteHero(index).subscribe(() => this.heroService.setHeroes(heroesLocal));
    });
  }

  navigateToDetails(id: number) {
    this.router.navigate(['/detail/', id]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // we need to get notified of changes from the detail page
  }
}
