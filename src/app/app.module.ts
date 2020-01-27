import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent1Component } from './child-component1/child-component1.component';
import { ChildComponent2Component } from './child-component2/child-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent1Component,
    ChildComponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
