import { Characters } from './../models/characters';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  md5 = new Md5();

  TS_VAR = new Date().getTime();
  PUBLIC_KEY = '21cf2a321b6e3a678e1007780d8e5709';
  PRIVATE_KEY = '47daf1a288e0e32477c7d1fd1f245a194a69fbf8';
  HASH = Md5.hashStr(this.TS_VAR + this.PRIVATE_KEY + this.PUBLIC_KEY);
  PAGINATION = 'limit=6&offset=0&';
  URL_API = 'https://gateway.marvel.com:443/v1/public';
  URL_PASS = `&ts=${this.TS_VAR}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;


  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}/characters?${this.PAGINATION}${this.URL_PASS}`)
    .pipe(map((data: any) => data.data.results))
  }

  getCharacterById(id: any): Observable<any> {
    return this.http.get<any>(`${this.URL_API}/characters/${id}?${this.URL_PASS}`)
    .pipe(map((obj) => obj.data.results[0]))
  }

  getComicByCharacter(id: any) {
    return this.http.get<any>(`${this.URL_API}/${id}/comics?${this.URL_PASS}`)
    .pipe(map((obj) => obj.data.results[0]))
  }

  pagination(page?: number | undefined, limit?: number | undefined): Observable<any> {
    return this.http.get<any>(`${this.URL_API}/characters?${this.URL_PASS}`)
    .pipe(map((data: any) => data.data))
  }

  registers(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}/characters?${this.PAGINATION}${this.URL_PASS}`)
    .pipe(map((data: any) => data.data.results[0]))
  }

}