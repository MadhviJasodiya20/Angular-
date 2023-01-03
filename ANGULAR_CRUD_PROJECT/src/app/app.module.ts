import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
 declarations: [
 AppComponent,
  EmployeeComponent
 ],
 imports: [
  BrowserModule,
 AppRoutingModule,
 FormsModule,
 HttpClientModule,
 ReactiveFormsModule
 ],
 exports:[EmployeeComponent],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }


