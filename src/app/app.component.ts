import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TabScreenComponent } from './tab-screen/tab-screen.component';
import { UserComponent } from './user/user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  phone = '';
  password = '';
  userDetails:any;
  routerLinkVariable = "/orders";
  sessionuser=null;
  localuser=null;
  //private LOGO = require("./assets/Icon.png");

  // usersession:any;
 //  username: string;
  constructor(public dialog: MatDialog, 
    private userProvider: UserComponent,
    private http : Http,
    private route: Router) {
      if(localStorage.getItem('user') !== null){
        this.userProvider.setUser(JSON.parse(localStorage.getItem('user')));
        this.userProvider.setCart(JSON.parse(localStorage.getItem('usercart')));
      }
      
    }

    ngOnInit() {
     /* let data =JSON.stringify(this.userProvider.getUser());
      console.log(data+ " 111111");
      this.username=this.userProvider.getUser().name; */
    }

  openTabDialog(): void {
    let dialogRef = this.dialog.open(TabScreenComponent, {
      width: '400px',
    });
  }

  displayOrders(): void {
    this.userDetails = this.userProvider.getUser().id;
    console.log("*************",this.userDetails);
    this.route.navigate(["/orders",this.userDetails]);
  }

  logout(){
    this.localuser=null;
    this.sessionuser=null;
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    location.reload();
  }
}
