import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  constructor(private http:Http) { 
    this.http.get('http://localhost:8080/list').subscribe(data =>{
      console.log(data.json());
      this.listofservices= data.json();
    });
  }

  ngOnInit() {
  }
  listofservices = {};

}
