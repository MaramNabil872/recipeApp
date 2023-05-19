import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {
  meals:any;
  constructor() { }

  ngOnInit() {
    this.meals=[
      {
        title:"Strawberry Milkshake", 
        description:"Strawbery or banana milkshake",
        imgurl:"/assets/images/milkshake.jpg"
      },
      {
        title:"Iced Coffee", 
        description:"easy iced coffee",
        imgurl:"/assets/images/coffee.jpg"
      },
      
    ]
  }

}
