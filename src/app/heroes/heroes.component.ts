import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  @ViewChild('heroesContainer') heroesContainer: ElementRef;

  constructor(public heroService: HeroService) { }

  ngOnInit() {
    // if (!this.heroService.tryGetHeroes()) {
    //   this.heroService.getHeroes().subscribe(heroes => {
    //     heroes.map(h => h ? h.nickname = h.name : null);
    //   });
    // }
  }
}
