import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-sign-up-screen',
  templateUrl: './sign-up-screen.component.html',
  styleUrls: ['./sign-up-screen.component.css']
})
export class SignUpScreenComponent implements OnInit {

  private userDetails= {};

  constructor(
    public dialogRef: MatDialogRef<SignUpScreenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)  {
   }

  ngOnInit() {
  }
  signup(){
    console.log(this.userDetails);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
