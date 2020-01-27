import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChildComponent1Component } from './child-component1/child-component1.component';
import { ChildComponent2Component } from './child-component2/child-component2.component';


const routes: Routes = [
  { path: 'child1', component: ChildComponent1Component },
  { path: 'child2', component: ChildComponent2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

