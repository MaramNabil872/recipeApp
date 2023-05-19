import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.page.html',
  styleUrls: ['./dinner.page.scss'],
})
export class DinnerPage implements OnInit {
  meals:any;
  constructor() { }

  ngOnInit() {
    this.meals=[
      {
        title:"Pizza", 
        description:"Chicken Ranch Pizza",
        imgurl:"/assets/images/pizza.jpg"
      },
      {
        title:"Pasta", 
        description:"White Sauce Pasta",
        imgurl:"/assets/images/white.jpg"
      },
      {
        title:"Steak", 
        description:"stick and potatos meal",
        imgurl:"/assets/images/steak.jpeg"
      },
    ]
  }

}
