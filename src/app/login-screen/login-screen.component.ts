import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Http, Headers } from '@angular/http';
import { UserComponent } from '../user/user.component';
import { AlertComponentComponent } from '../alert-component/alert-component.component';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  private LOGINURL= 'http://localhost:8080/login';
  userDetails: any;

  constructor(
    public dialogRef: MatDialogRef<LoginScreenComponent>,
    private http: Http,
    private user: UserComponent,
    public dialog: MatDialog) 
    {
      this.userDetails = {};
     }

     alert(msg): void {
       console.log("**********" +msg +"**********");
      let dialogRef = this.dialog.open(AlertComponentComponent, {
        width: '400px',
        data: { message: msg}
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  login(){
    
    this.http.post(this.LOGINURL, this.userDetails)
    .subscribe(
      (response) => {
        let message = response.json();
        console.log(message);
      if(message.status == 1){
       // console.log(this.userDetails);
        this.user.setUser(message);
        this.dialogRef.close();
        this.user.setCart(message.usercart);
        this.alert(message.message);
        
      }
      },
      (error) => console.log(error)
    );
  }

}
