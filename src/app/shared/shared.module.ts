import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabsPagesComponent } from '../pages/tabs-pages/tabs-pages.component';

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
