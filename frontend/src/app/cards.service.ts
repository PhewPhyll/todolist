import { Injectable } from '@angular/core';
import { cardInsert } from './cards';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
// import { } from

@Injectable({
  providedIn: 'root'
})

export class CardsService {

  private boardUrl = 'http://localhost:3000/api/board';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  // all
  getPlaing(): Observable<cardInsert[]> {
    return this.http.get<cardInsert[]>(`${this.boardUrl}`)
  }
  // id
  getPlaingId(_id:string): Observable<cardInsert[]> {
    return this.http.get<cardInsert[]>(`${this.boardUrl}/${_id}`)
  }
  // title
  getPlaningTitle(title:string): Observable<cardInsert[]> {
    return this.http.get<cardInsert[]>(`${this.boardUrl}/${title}`)
  }
}
