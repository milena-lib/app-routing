import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabsPagesComponent } from '../pages/tabs-pages/tabs-pages.component';
// import { Child1Component } from '../components/child1/child1.component';
// import { Child2Component } from '../components/child2/child2.component';
@NgModule({
  declarations: [TabsPagesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TabsPagesComponent
  ]
})
export class SharedModule { }
