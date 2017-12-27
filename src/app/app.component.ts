import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { TabScreenComponent } from './tab-screen/tab-screen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  phone = '';
  password = '';
  constructor(public dialog: MatDialog) {
    
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginScreenComponent, {
      width: '250px',
      data: { phone: this.phone, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  openTabDialog(): void {
    let dialogRef = this.dialog.open(TabScreenComponent, {
      width: '400px',
    });
  }
}
