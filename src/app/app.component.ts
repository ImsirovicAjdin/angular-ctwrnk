import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: [ './app.component.css' ]
  template: `
    <div class="parent">parent</div>
    <app-child [data]="parentData"></app-child>
  `
})
export class AppComponent  {
  parentData = {
    name: 'Ajdin'
  }
}
