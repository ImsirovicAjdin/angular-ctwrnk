import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  //styleUrls: [ './app.component.css' ]
  template: `
    <div class="parent">parent</div>
  `
})
export class AppComponent  {
  name = 'Angular';
}
