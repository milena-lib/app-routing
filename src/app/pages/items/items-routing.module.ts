import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import { DetailsComponent } from './details/details.component';

const itemRoutes: Routes = [
  {path: '', redirectTo: 'details'},
  { path: 'details', component: DetailsComponent}
  // ,{ path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },

];

// const routes: Routes = [{ path: '', component: ItemsComponent }];
const routes: Routes =[
  { path: '', component: ItemsComponent },
  //{ path: 'items/:id', component: ItemsComponent},
  { path: ':id', component: ItemsComponent, children: itemRoutes}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
