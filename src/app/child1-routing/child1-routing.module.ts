import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent1Component } from '../child-component1/child-component1.component';
import { ChildComponent2Component } from '../child-component2/child-component2.component';
import { AppComponent } from '../app.component';
const routes: Routes = [
  { path: 'child1', component: ChildComponent1Component },
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Child1RoutingModule { }
