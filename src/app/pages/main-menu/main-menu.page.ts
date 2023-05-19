import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {
  term="";
  categories:any;
  
  constructor(private categoriesService:CategoriesService) {}


  ionChange(event:any) {
    console.log(event.detail.value)
}
  ngOnInit() {
    this.categoriesService.getCategories().subscribe(
      (res:any)=>{
        res.map((item:any) =>{
          item.path = '/' + item.name.toLowerCase(); 
        });
        this.categories=res      
      },
      (err)=>{console.log(err)}
    )
    this.categories=[]
  }

}
