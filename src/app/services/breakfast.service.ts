import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
  })
  export class BreakfastService {
    url=environment.url2+"/breakfast";
    constructor(private http:HttpClient) { }

    getbreakfast(){
      return this.http.get(this.url)
    }
  
    
  }