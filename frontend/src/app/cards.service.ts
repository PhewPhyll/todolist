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

  constructor(private http: HttpClient) {}
  private cardsUrl = 'http://localhost:3000/api/card';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getCards(): Observable<cardInsert[]> {
    return this.http.get<cardInsert[]>(this.cardsUrl);
  }

  getCard(_id: string): Observable<cardInsert> {
    const url = `${this.cardsUrl}/${_id}`;
    return this.http.get<cardInsert>(url);
  }

  updataCard(card: cardInsert): Observable<any> {
    return this.http.put(this.cardsUrl, card, this.httpOptions);
  }

  addCard(card: cardInsert): Observable<cardInsert> {
    return this.http.post<cardInsert>(this.cardsUrl, card, this.httpOptions);
  }

  deleteCard(_id:string):Observable<cardInsert>{
    const url = `${this.cardsUrl}/${_id}`

    return this.http.delete<cardInsert>(url,this.httpOptions)
  }
}
