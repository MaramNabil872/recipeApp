import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.page.html',
  styleUrls: ['./snacks.page.scss'],
})
export class SnacksPage implements OnInit {
  meals:any;
  constructor() { }

  ngOnInit() {
    this.meals=[
      {
        title:"Twinks", 
        description:"Homemade cake",
        imgurl:"/assets/images/twinkies.png"
      },]
  }

}
