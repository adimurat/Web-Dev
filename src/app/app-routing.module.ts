import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { ToysComponent } from './toys/toys.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { SportProductsComponent } from './sport-products/sport-products.component';

const routes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'electric', component: AppProductListComponent},
  {path: 'toys', component: ToysComponent},
  {path: 'home', component: HomeProductsComponent},
  {path: 'sport', component: SportProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
