import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of, Subject } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { DtToast } from '@dynatrace/barista-components/toast';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroes: Hero[] = [];
  private readonly dbUrl = 'https://marvel-e1c17.firebaseio.com/heroes.json';
  private readonly dbUrlBase = 'https://marvel-e1c17.firebaseio.com';
  heroesChanged = new Subject<Hero[]>();
  public lastHeroesIndex: number;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private toast: DtToast) { }

  setHeroes(heroes: Hero[]) {
    this.heroes = heroes.filter(h => h != null); // due to empty nodes when a hero is deleted in firebase DB
    this.onHeroesChanged();
  }

  private getHeroesList(): Hero[] {
    return this.heroes.slice();
  }

  tryGetHeroes(): Hero[] {
    const heroesList = this.getHeroesList();
    return heroesList && heroesList.length ? heroesList : null;
  }

  onHeroesChanged() {
    this.heroesChanged.next(this.getHeroesList());
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<any>(this.dbUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        map(heroes => {
          this.heroes = Object.values(heroes).filter(h => h != null) as Hero[];
          this.lastHeroesIndex = heroes.length;
          return this.heroes;
        }),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.dbUrl}?orderBy="id"&equalTo=${id}`;
    return this.http.get<any>(url).pipe(
      map(x => x ? Object.values(x)[0] as Hero : null),
      tap(x => x && Object.values(x).length ?
        this.log(`fetched heroes with id="${id}"`) :
        this.log(`no heroes matching id "${id}" could be found`),
      ),
      catchError(this.handleError<Hero>(`getHero from API with id=${id}`))
    );
  }

  /** GET hero parent node index by id. Will 404 if id not found */
  getHeroIndex(id: number): Observable<number> {
    const url = `${this.dbUrl}?orderBy="id"&equalTo=${id}`;
    return this.http.get<any>(url).pipe(
      map(x => x ? parseInt(Object.keys(x)[0]) : null),
      catchError(this.handleError<number>(`getHero from API with id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error && error.error ? error.error.status : error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    const url = `${this.dbUrlBase}/heroes/${this.heroes.indexOf(hero)}.json`;
    return this.http.put(url, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  // updateLocalHero(hero: Hero): void {
  //   const heroesLocal: Hero[] = this.tryGetHeroes();
  //   if (!heroesLocal) {
  //     this.getHeroes().subscribe(heroes => {
  //       this.updateHeroName(hero, heroes);
  //     });
  //     return;
  //   }

  //   this.updateHeroName(hero, heroesLocal);
  // }

  public updateHeroName(hero: Hero) {
    const heroCurrent = this.heroes.find(h => h.id === hero.id);

    if (!heroCurrent) {
      this.toast.create('This name cannot be changed!');
      return;
    }

    if (heroCurrent.nickname === hero.nickname) {
      this.toast.create('You have not made any changes!');
      return;
    }

    heroCurrent.nickname = hero.nickname; // only first found item is changed;
    this.onHeroesChanged();
    this.toast.create('Your changes have been saved!');
    // this.heroes.forEach((element, index) => {  //to change all names
    //   if (element.name === hero.name) {
    //     this.heroes[index].name = hero.name;
    //   }
    // });
  }

  addHero(hero: Hero): Observable<Hero> {
    const url = `${this.dbUrlBase}/heroes/${this.lastHeroesIndex + 1}.json`;
    return this.http.put<Hero>(url, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(index: number): Observable<Hero> {
    const url = `${this.dbUrlBase}/heroes/${index}.json`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero index=${index}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    term = term.charAt(0).toUpperCase() + term.slice(1);
    const url = `${this.dbUrl}?orderBy="name"&startAt=${term}`;
    return this.http.get<any>(url).pipe(
      map(x => x ? Object.values(x) as Hero[] : null),
      tap(x => x && Object.values(x).length ?
        this.log(`Found heroes matching "${term}"`) :
        this.log(`No heroes matching "${term}"`),
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', [])),
    );
  }

  searchLocalHeroes(term: string): Observable<Hero[]> {
    if (!term || term.length < 2) {
      // if not search term, return empty hero array.
      return of([]);
    }

    const heroesLocal: Hero[] = this.tryGetHeroes();
    if (!heroesLocal) {
      return this.searchHeroes(term);
    }

    const heroesResults = heroesLocal.filter(h => h.name.toLowerCase().includes(term.toLowerCase()));
    heroesResults.length ? this.log(`Found heroes matching "${term}"`) : this.log(`No heroes matching "${term}"`);

    return of(heroesResults);
  }
}
