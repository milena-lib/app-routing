import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabsPagesComponent } from '../pages/tabs-pages/tabs-pages.component';
import { BasePageComponent } from './base-page/base-page.component';
import { DataService } from '../core/data.service';
import { UserService } from '../core/user.service';
import { CardComponent } from '../components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiStepFormComponent } from '../components/multi-step-form/multi-step-form.component';
import { FormatTitlePipe } from '../pipes/format-title.pipe';
import { MultiFormComponent } from '../components/multi-form/multi-form.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProductComponent } from '../components/product/product.component';

@NgModule({
  declarations: [TabsPagesComponent
    , BasePageComponent
    , CardComponent
    , MultiStepFormComponent
    , FormatTitlePipe 
    , MultiFormComponent
    , ProductsComponent
    , ProductComponent
  ],
  imports: [
    CommonModule
    , RouterModule
    , FormsModule
    , ReactiveFormsModule
  ],
  exports: [
    TabsPagesComponent
    , BasePageComponent
    , CardComponent
    , MultiStepFormComponent
    , MultiFormComponent
    , ProductsComponent
    , ProductComponent
  ],
  providers: [DataService, UserService]
})
export class SharedModule { }
