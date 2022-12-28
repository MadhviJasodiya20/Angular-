import { Injectable } from '@angular/core';
import {observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { materialForm } from './model/info';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materialForm: any;

  url:string="http://localhost:3000";

  constructor(public http:HttpClient) { }

  MaterialPost(material:materialForm){
    console.log(material);

    return this.http.post<materialForm>(this.url+"/Mat",material);
  }
}
