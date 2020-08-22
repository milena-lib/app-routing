import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TabsComponent } from './components/tabs/tabs.component';
// import { TabsPagesComponent } from './pages/tabs-pages/tabs-pages.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TabsComponent,
    // TabsPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
