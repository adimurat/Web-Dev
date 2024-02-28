import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductItemService } from '../product-item.service';

export interface Category{
  id: number,
  name: string,
  image: string
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  categories: Category[] = [
    { id: 1, name: 'Electrical devices', image: 'https://png.monster/wp-content/uploads/2023/09/PNG.monsterapple-iphone-15-pro-photo%20png.png' },
    { id: 2, name: 'Toys', image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/teddy-bear-Zel9DZ1-600.jpg' },
    { id: 3, name: 'Home products', image: 'https://www.ikea.com/ru/ru/images/products/nodig-kuhonnye-prinadleznosti-predmet-cernyj__0379091_PE554503_S5.JPG' },
    { id: 4, name: 'Sport and tourism', image: 'https://thumbs.dreamstime.com/b/red-bicycle-20324844.jpg' }
  ];

   constructor(private router: Router, private itemService: ProductItemService){}

  ngOnInit(): void {
  }

  public async openItem(item: Category){
    await this.router.navigate(['link']);
    this.itemService.setCurrentItem(item);
  }
}
