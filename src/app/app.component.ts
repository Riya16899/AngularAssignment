import { Component, Input } from '@angular/core';
import { ChildComponent1Component } from './child-component1/child-component1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ParentComponent';
  values = '';

  names = ['Dr IQ', '   ', '  Bombasto  '];



  onKey(name: string) { // without type info
    // this.values = event.target.value + ' | ';
    this.values = name;
  }

}
