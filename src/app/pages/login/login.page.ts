import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email=''
password=''
  constructor(private router:Router, private userService:UserServiceService) { }

  ngOnInit() {
  }
 signin(){
  console.log(this.email)
  console.log(this.password)
  let flag=false;
  this.userService.getbate5().subscribe(
    (res:any)=>{
      console.log(res)
      for(let i=0;i<res.length;i++){
        if((res[i].email==this.email )&& ( res[i].password==this.password)){
          flag=true;
          localStorage.setItem("user",JSON.stringify(res[i]))
        }else{
          continue;
        }
      }
      if(flag==true){
        this.router.navigateByUrl("/main-menu")
      }else{
        alert("check info")
      }
    },
    (err)=>{ console.log(err);}
  )

}

}
