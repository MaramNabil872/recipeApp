import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url=environment.url1+"/users";
  constructor(private http:HttpClient) { }

  postUser(bate5:any){
    return this.http.post(this.url,bate5)
  }

  getbate5(){
    return this.http.get(this.url)
  }

  
}
