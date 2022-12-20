import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  show: boolean = false;
  clicks: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
    this.clicks.push((new Date()).toISOString());
  }
  getColor(i: number){
    return i >= 4 ? 'blue' : '';
  }

}
