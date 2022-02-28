import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';

import {MessageService} from './message.service';


@Injectable({providedIn: 'root'})
export class HeroService {

  private heroesUrl = 'https://gateway.marvel.com/v1/public/characters?limit=12&ts=patata&apikey=6fd43fb837b074122934aefe035690fd&hash=7bf3a80f2c82da070f2b1230ae6bc026';  // URL to web api

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

  getCharacterByName(characterName: string): Observable<any> {
    const characterBYNameUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=patata&apikey=6fd43fb837b074122934aefe035690fd&hash=7bf3a80f2c82da070f2b1230ae6bc026';
    return this.http.get(characterBYNameUrl);
  }


}
