import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstFormGroup, secondFormGroup, thirdFormGroup, userForm } from './model/info';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000";
  
  userData(data:userForm)
  {
    console.log(data);
    return this.http.post<userForm>(this.url+"/user",data);
  }

  firstInfo(first:firstFormGroup){
    console.log(first);
    return this.http.post<firstFormGroup>(this.url+"/firstInfo", first);
  }

  secondInfo(first:secondFormGroup){
    console.log(first);
    return this.http.post<firstFormGroup>(this.url+"/secondInfo", first);
  }

  thirdInfo(first:thirdFormGroup){
    console.log(first);
    return this.http.post<thirdFormGroup>(this.url+"/thirdInfo", first);
  }


}
