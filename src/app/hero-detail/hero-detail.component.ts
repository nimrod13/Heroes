import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DtToast } from '@dynatrace/barista-components/toast';
import { HeroService } from '../hero.service';
import { switchMap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private toast: DtToast
  ) { }

  ngOnInit() {
    if (!this.hero) {
      this.getHero();
    }
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const heroes = this.heroService.tryGetHeroes();

    if (heroes) {
      this.hero = JSON.parse(JSON.stringify(heroes.find(h => h.id === id)));
      this.trySetNickname();
      return;
    }

    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
      this.trySetNickname();
    });
  }

  trySetNickname() {
    if (!this.hero) {
      return;
    }

    if (!this.hero.nickname) {
      this.hero.nickname = this.hero.name;
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.getHeroIndex(this.hero.id).pipe(switchMap((id: number) =>
      this.heroService.updateHero(this.hero, id))
    ).subscribe(() => this.updateHeroNickname(this.hero));
  }

  private updateHeroNickname(hero: Hero): void {
    const heroCurrent = this.heroService.tryGetHeroes().find(h => h.id === hero.id);

    if (!heroCurrent) {
      this.toast.create('This name cannot be changed!');
      return;
    }

    if (heroCurrent.nickname === hero.nickname) {
      this.toast.create('You have not made any changes!');
      return;
    }

    heroCurrent.nickname = hero.nickname; // only first found item is changed;
    this.heroService.onHeroesChanged();
    this.toast.create('Your changes have been saved!');
  }

  getImageSrc() {
    const path = this.getPathWithHttps();
    return `${path}/landscape_xlarge.jpg`;
  }

  getImageSrcSet() {
    const path = this.getPathWithHttps();
    return `${path}/landscape_small.jpg 120w, ${path}/landscape_medium.jpg 175w, ${path}/landscape_large.jpg 190w, ${path}/landscape_xlarge.jpg 270w`;
  }

  getPathWithHttps() {
    return this.hero.thumbnail.path.indexOf('https') >= 0 ? this.hero.thumbnail.path : this.hero.thumbnail.path.replace('http', 'https');
  }

  getSeriesItems(hero: Hero) {
    return hero.series && hero.series.available > 0 ? hero.series.items : null;
  }

  getStories(hero: Hero) {
    return hero.stories && hero.stories.available > 0 ? hero.stories.items : null;
  }
}
