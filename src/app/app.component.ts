import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ParentComponent';
  values = '';

  onKey(name: string) { // without type info
    // this.values = event.target.value + ' | ';
    this.values = name;
  }

}
