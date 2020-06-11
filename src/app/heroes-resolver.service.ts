import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Injectable({ providedIn: 'root' })
export class HeroesResolverService implements Resolve<Hero[]> {
  constructor(
    private heroService: HeroService
  ) { }

  resolve() {
    const heroes = this.heroService.tryGetHeroes();

    if (!heroes) {
      return this.heroService.getHeroes();
    } else {
      return heroes;
    }
  }
}
