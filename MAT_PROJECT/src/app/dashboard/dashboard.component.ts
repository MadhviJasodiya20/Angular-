import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  
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

export class DialogExample{}



@Component({

  selector: 'DialogExample',

  templateUrl: 'dialog.html',

})


export class DialogExample2 {}
