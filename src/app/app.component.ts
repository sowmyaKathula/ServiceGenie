import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TabScreenComponent } from './tab-screen/tab-screen.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  phone = '';
  password = '';
  constructor(public dialog: MatDialog, 
    private userProvider: UserComponent) {}

  openTabDialog(): void {
    let dialogRef = this.dialog.open(TabScreenComponent, {
      width: '400px',
    });
  }
}
