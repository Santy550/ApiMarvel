import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError, map, Observable, of, tap} from 'rxjs';

import {MessageService} from './message.service';
import {Hero} from "./hero";

@Injectable({providedIn: 'root'})
export class HeroService {

  public heroesUrl = 'https://gateway.marvel.com/v1/public/characters?limit=12&ts=patata&apikey=6fd43fb837b074122934aefe035690fd&hash=7bf3a80f2c82da070f2b1230ae6bc026';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  getHeroes(): Observable<any> {
    return this.http.get(this.heroesUrl);
  }


  getHero(id: number) {
    const heroUrl = "https://gateway.marvel.com/v1/public/characters/" + id + "?limit=1&ts=patata&apikey=6fd43fb837b074122934aefe035690fd&hash=7bf3a80f2c82da070f2b1230ae6bc026";

    return this.http.get(heroUrl).pipe(
      map((hero: any) => {
        return hero;
      })
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}&nameStartsWith=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


}
