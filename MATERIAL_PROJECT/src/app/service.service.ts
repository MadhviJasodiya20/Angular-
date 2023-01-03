import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerForm } from './model/info';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }

  url:string="http://localhost:3000";
  
  saveData(data:registerForm)
  {
    return this.http.post<registerForm>(this.url+"/data",data);
  }
}
