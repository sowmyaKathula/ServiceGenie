import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input() data:{};
  constructor() { 
  }

  ngOnInit() {
  }

  click(){
    console.log(this.data);
  }
}
