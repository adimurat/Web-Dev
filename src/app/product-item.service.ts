import { Injectable } from '@angular/core';
import { Category } from './category/category.component';


@Injectable({
  providedIn: 'root'
})
export class ProductItemService {
 
  private currentItem: Category | null = null;
  constructor() { }

  public setCurrentItem(item: Category){
    this.currentItem = item;
  }

  public getCurrentItem(): Category | null{
    return this.currentItem;
  }
}
