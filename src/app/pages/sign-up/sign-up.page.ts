import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
username=''
email=''
password=''
confpassword=''
  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit() {
  }
  signup(){
    console.log(this.username)
    console.log(this.email)
    console.log(this.password)
    console.log(this.confpassword)
    if(this.password==this.confpassword){
      let user ={
        "username":this.username,
        "email":this.email,
        "password":this.password
      }
      this.userService.postUser(user).subscribe(
        (res)=>{
          console.log(res);
          localStorage.setItem("user",JSON.stringify(res))
          this.router.navigateByUrl('/login')
        },
        (err)=>{console.log(err)}
      )
    }
    else{
      alert("passwords doesn't match")
    }

  }
}
