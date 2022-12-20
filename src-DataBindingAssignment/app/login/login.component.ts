import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username:string="";

  constructor()
  {
    console.log('This is constructor');

  }
  ngOnChanges() //angular sets or resets data bound input properties
  {
    console.log('ngOnChanges');
  }
  ngOnInit(): void  //Initialize the directive or component after displays the data bound properties
  {
    console.log('ngOnInit');
  }
  ngDoCheck() //Detect and act upon changes
  {
    console.log('ngDoCheck');
  }
  ngAfterContentInit()  //Responds external content into the components view
  {
    console.log('ngAfterContentInit');

  }
  ngAfterContentChecked() //Responds after angular checks the content projected into the directive
  {
    console.log('ngAfterContentChecked');

  }
  ngAfterViewInit() //Respond after angular initializes the components view
  {
    console.log('ngAfterViewInit');

  }
  ngAfterViewChecked()  //Respond after the angular checks the components view that contains the directive
  {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() //To avoid memory leaks and destroy the directive or component
  {
    console.log('ngOnDestroy');
  }

}
