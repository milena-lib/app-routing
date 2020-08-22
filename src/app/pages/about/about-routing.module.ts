import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: AboutComponent }];

// const routes: Routes = [
//   { path: '', component: AboutComponent },
//   { path: 'home',  loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule) },
//   { path: 'items', loadChildren: () => import('../../pages/items/items.module').then(m => m.ItemsModule) }
// ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
