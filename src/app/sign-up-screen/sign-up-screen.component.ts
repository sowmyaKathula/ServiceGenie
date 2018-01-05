import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Http, Headers } from '@angular/http';
import { error } from 'util';
import { UserComponent } from '../user/user.component';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-sign-up-screen',
  templateUrl: './sign-up-screen.component.html',
  styleUrls: ['./sign-up-screen.component.css']
})
export class SignUpScreenComponent implements OnInit {

  private SIGNUPURL = 'http://localhost:8080/register';
  userDetails: any;

  constructor(
    public dialogRef: MatDialogRef<SignUpScreenComponent>,
    private http : Http,
    private userProvider: UserComponent,
    private session: SessionService
  )  {
      this.userDetails = {
        isProvider: false
      };
   }

  ngOnInit() {
  }
  signup(){
    console.log(this.userDetails);
    this.http.post(this.SIGNUPURL,this.userDetails)
    .subscribe( 
    (response) => {
      let message = response.json();
      console.log(message);
      if(message.status == 1){
        this.userProvider.setUser(this.userDetails);
        this.session.setSession(this.userDetails);
        this.dialogRef.close();
      }
     // this.dialogRef.close();
    },
    (error) => console.log(error)
  );

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
