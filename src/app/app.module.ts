import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SharedModule } from './shared/shared.module';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { MessageModule } from './dynamic-modules/message/message.module';
// import { ProductsComponent } from './components/products/products.component';
// import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TabsComponent,
    Child1Component,
    Child2Component,
    // ProductsComponent,
    // ProductComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
