import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  //private id:any;
   data:{
    id: string;
  }
  orders : {};
  private OrdersURL = 'http://localhost:8080/orders';

  constructor(private route: ActivatedRoute,
              private http : Http,) { 
                
              }

  ngOnInit() {
    this.data = {
        id: this.route.snapshot.params['userId']
    }
    this.http.post(this.OrdersURL,this.data).subscribe(responce =>{
      this.orders = responce.json();
      console.log(responce.json());
    });
  }

}
