import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TabScreenComponent } from '../tab-screen/tab-screen.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private AddtoCartURL = 'http://localhost:8080/addtocart';
  private ClearCartURL = 'http://localhost:8080/clearcart';
  private RequestServiceURL = "http://localhost:8080/requestservice";
  constructor(private http : Http,
    public dialog: MatDialog) { 
   
    }

  ngOnInit() {
  
  }

 // private userdata:any;
  private userdata = {
    id : '',
    name : '',
    phone: '',
    isProvider: ''
  }

  private usercart = [];

  public addtocart(data){
    console.log(data);
    if(this.usercart.indexOf(data) == -1){

      if(this.userdata.id == ''){
        this.openTabDialog();
      }else{
        data.userid = this.userdata.id;
        this.usercart.push(data);
        // API for putting this JSON to DB
        if(this.userdata.phone.length>0){
          this.http.post(this.AddtoCartURL,data).subscribe(responce =>{
            console.log(responce);
          });
        }
      }
     
    } 
  }

  public requestService(){
    let x:any;
    for (x in this.usercart){
      console.log(JSON.stringify(this.usercart[x]));
    }
    if(this.usercart.length > 0){
        this.http.post(this.RequestServiceURL,this.usercart).subscribe(response =>{
          console.log(response);
        });
        this.usercart = [];
    }
  }

  public ClearCartAll() {
    this.usercart = [];
    let data = '{"userID":'+ this.userdata.id+', "itemID":'+ 0+'}';
    console.log(data);
    this.http.post(this.ClearCartURL,data).subscribe(responce =>{
      console.log(responce);
    });
  }

  public ClearCart(id){
    // {userID: this.userdetail.id, itemID: id}
    let data = '{"userID":'+ this.userdata.id+', "itemID":'+ id.sub_service_cat_id+'}';
    console.log(data);
    this.http.post(this.ClearCartURL,data).subscribe(responce =>{
      console.log(responce);
    });
    
    console.log(this.usercart.indexOf(id));
    this.usercart.splice(this.usercart.indexOf(id),1);
    
  }


  openTabDialog(): void {
    let dialogRef = this.dialog.open(TabScreenComponent, {
      width: '400px',
    });
  }
  
    public getCart(){
      return this.usercart;
    }

    public setCart(data){
      this.usercart = data;
    }

  public setUser(data) {
   // localStorage.setItem('usersession',JSON.stringify(data));
    this.userdata = data;
  }

  public getUser(){
    return this.userdata;
  }

}
