import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.page.html',
  styleUrls: ['./lunch.page.scss'],
})
export class LunchPage implements OnInit {
  meals:any;
  constructor() { }

  ngOnInit() { 
    this.meals=[
      {
        title:"Rice and vegetables", 
        description:"main lunch meal",
        imgurl:"/assets/images/rice.webp"
      },
      {
        title:"Pasta", 
        description:"Red Sauce Pasta",
        imgurl:"/assets/images/paasta.jpeg"
      },
      {
        title:"Fahita", 
        description:"Fahita meal",
        imgurl:"/assets/images/fahita.jpg"
      },
    ]
  }

}
