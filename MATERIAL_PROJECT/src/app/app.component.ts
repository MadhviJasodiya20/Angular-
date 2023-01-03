import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

export interface ChipColor
{
  name:string;
  color:ThemePalette;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngMaterial';
  sports:string[]=['cricket', 'football', 'hockey', 'snooker'];
  colors:ChipColor[]= [

    {name:'cricket',color:undefined},

    {name:'football',color:'primary'},

    {name:'hockey',color:'warn'},

    {name:'snooker',color:'accent'},

  ];

  constructor(public dialog: MatDialog) {}



  openDialog() {

    this.dialog.open(DialogExample,{

      width: '250px',

      height:'250px'

    });

  }

  openDialog2() {

    this.dialog.open(DialogExample2,{

      width: '250px',

      height:'250px'

    });
  }

}

@Component({

  selector: 'DialogExample',

  templateUrl: 'dialog.html',

})

export class DialogExample {}


@Component({

  selector: 'DialogExample2',

  templateUrl: 'dialog.html',

})

export class DialogExample2 {}