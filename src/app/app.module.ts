import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { CategoryComponent } from './category/category.component';
import { ToysComponent } from './toys/toys.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { SportProductsComponent } from './sport-products/sport-products.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    AppProductListComponent,
    CategoryComponent,
    ToysComponent,
    HomeProductsComponent,
    SportProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
