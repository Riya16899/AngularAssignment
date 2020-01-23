import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent1Component } from '../child-component1/child-component1.component';


const routes: Routes = [
  { path: 'child1', component: ChildComponent1Component },
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Child1RoutingModule { }
