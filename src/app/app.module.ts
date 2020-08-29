import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TabsComponent } from './components/tabs/tabs.component';
// import { TabsPagesComponent } from './pages/tabs-pages/tabs-pages.component';
import { SharedModule } from './shared/shared.module';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { MessageModule } from './dynamic-modules/message/message.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TabsComponent,
    Child1Component,
    Child2Component
    // TabsPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
