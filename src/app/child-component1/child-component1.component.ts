import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrls: ['./child-component1.component.scss']
})
export class ChildComponent1Component implements OnInit {

  private namee = '';
  @Input()
  set name(name: string) {
    this.namee = (name && name.trim()) || '<no name>';
  }
  get name(): string { return this.namee; }



  constructor() { }

  ngOnInit() {
  }

}
