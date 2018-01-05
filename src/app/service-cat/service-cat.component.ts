import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-service-cat',
  templateUrl: './service-cat.component.html',
  styleUrls: ['./service-cat.component.css']
})
export class ServiceCatComponent implements OnInit {

  service: {
    id:number,
    name: string
  };
  sub_services = {};
  constructor(private route: ActivatedRoute,
  private http: Http,
  private userprovider: UserComponent) {
    this.service = {
      id: this.route.snapshot.params['serviceId'],
      name: this.route.snapshot.params['serviceName']
    };

    this.http.post('http://localhost:8080/service', this.service).subscribe(
      data =>{
        console.log(data.json());
        this.sub_services= data.json();
      }
    );
  }

  ngOnInit() {
    
    console.log(this.service.id);
  }

  addtoCart(cat) {
    console.log(cat);
    this.userprovider.addtocart(cat);
  }
}
