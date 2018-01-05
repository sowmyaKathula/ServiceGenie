import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponentComponent implements OnInit {


    constructor(public dialogRef: MatDialogRef<AlertComponentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any){}

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
      }

}
