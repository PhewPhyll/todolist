import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent {
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(CreateDialogComponent,{
      width:'350px',
    })
  }
}
