import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fogot-password',
  templateUrl: './fogot-password.page.html',
  styleUrls: ['./fogot-password.page.scss'],
})
export class FogotPasswordPage implements OnInit {
email=''
  constructor() { }

  ngOnInit() {
  }
reset(){
  console.log(this.email)
}
}
