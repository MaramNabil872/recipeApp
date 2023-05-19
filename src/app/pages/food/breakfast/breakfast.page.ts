import { Component, OnInit } from '@angular/core';
import { BreakfastService } from 'src/app/services/breakfast.service'

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
})
export class BreakfastPage implements OnInit {
  meals:any;
term="";

  constructor(private breakfastService:BreakfastService) { }

  ngOnInit() {
   this.breakfastService.getbreakfast().subscribe(
    (res)=>{console.log(res)
    this.meals=res},
    (err)=>{console.log(err)}

   )
    }
  }