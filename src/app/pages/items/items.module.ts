import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ItemsComponent, DetailsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ]
})
export class ItemsModule { }
