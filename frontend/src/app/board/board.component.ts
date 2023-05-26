import { Component, OnInit } from '@angular/core';
import { cardInsert } from '../cards';
import { CardsService } from "../cards.service"

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  ngOnInit(){
    this.show()
  }

  done: cardInsert[] = []

  constructor(
      private cardService : CardsService
  ) { }

  show(){
    return this.cardService.getPlaing()
    .subscribe((e)=>{this.done=e})
  }

}
