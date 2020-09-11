import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabsPagesComponent } from '../pages/tabs-pages/tabs-pages.component';
import { BasePageComponent } from './base-page/base-page.component';
import {DataService} from '../core/data.service';
@NgModule({
  declarations: [TabsPagesComponent
    , BasePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TabsPagesComponent,
    BasePageComponent
  ],
  providers: [DataService]
})
export class SharedModule { }
