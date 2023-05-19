import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deserts',
  templateUrl: './deserts.page.html',
  styleUrls: ['./deserts.page.scss'],
})
export class DesertsPage implements OnInit {
  meals:any;
  term="";
  constructor() { }

  ngOnInit() {
    this.meals=[
      {
        title:"Oreo Cake", 
        description:"Oreo Cake at home",
        imgurl:"/assets/images/oreo.jpg"
      },
      {
        title:"Cream Caramel", 
        description:"Easy Homemade cream caramel",
        imgurl:"/assets/images/caramel.jpg"
      },]
  }

}
