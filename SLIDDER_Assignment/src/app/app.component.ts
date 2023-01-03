import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pslidder';

  max = 100;
  min = 0;
  step = 1;
  value = 0;
}
