import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { cardInsert } from './cards';
import { CardsService } from './cards.service';
import { MatDialog } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { ViewCardComponent } from './view-card/view-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private CardsService: CardsService,
    private matDialog: MatDialog
  ) {}
  openDialog() {
    this.matDialog.open(ViewCardComponent, {
      minWidth: '300px',
    });
  }
  selectedCard?: cardInsert;

  cards: cardInsert[] = [];
  ngOnInit(): void {
    this.getCards();
  }
  onSelect(card: cardInsert): void {
    this.selectedCard = card;
  }
  getCards(): void {
    this.CardsService.getCards().subscribe((cards) => (this.cards = cards));
  }
  title = 'Title';
  planing = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
