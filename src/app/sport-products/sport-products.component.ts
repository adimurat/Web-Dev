import { Component } from '@angular/core';

@Component({
  selector: 'app-sport-products',
  templateUrl: './sport-products.component.html',
  styleUrl: './sport-products.component.css'
})
export class SportProductsComponent {
  title:string | undefined;
  

  ngOnInit(): void {
    this.title = 'Sports and tourism';
    
  }
  
  products: {image: string, name:string, price: string, rating: number, ratingImg: string , description: string, link: string}[] = [
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwa0MwLOlO35shUOfjih20p5Qt9Lk2yrisQ&usqp=CAU', name: 'Boll', price: '1000000 KZT', rating: 7.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'},
    {image: 'https://5.imimg.com/data5/HS/TM/MY-8936835/tennis-balls-500x500.jpg', name: 'Boll', price: '100000 KZT', rating: 4.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/chuwi-herobook-pro-14-1-b08316yskh-serebristyi-101675028/?c=750000000'},
    {image: 'https://content1.rozetka.com.ua/goods/images/big/294596117.jpg', name: 'Boll Platin', price: '50000 KZT', rating: 7.1, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'},
    {image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/HQ/UP/HK/9972876/new-product-500x500.jpeg', name: 'Bag', price: '60000 KZT', rating: 5.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/colmi-p28-plus-chernyi-106096505/?c=750000000'},
    {image: 'https://wadoo.ru/upload/iblock/daa/daa0bca4740e33ffb3cfe73859d43061.jpg', name: 'Gloves', price: '200000 KZT', rating: 8.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000'},
    {image: 'https://img5.lalafo.com/i/posters/original/e0/bf/13/f6e81bb8528e1c64ac94866d4e.jpeg', name: 'Boots', price: '30000 KZT', rating: 6.1, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/htc-wireless-headphone-1-chernyi-111972451/?c=750000000'},
    {image: 'https://s.f.kz/prod/1890/1889893_550.jpg', name: 'Tool', price: '700000 KZT', rating: 7.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000'},
    {image: 'https://ir.ozone.ru/s3/multimedia-9/6808828221.jpg', name: 'Sleep tool', price: '500000 KZT', rating: 5.3, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnU7J5pmH4yD7Znenkcvg5gSoE696qwbKmjA&usqp=CAU', name: 'Tool', price: '300000 KZT', rating: 6.3, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvn2RNsligK8SpLP3MCSRzgnrhfkndRmC5RmQrlUnR2l_KO8_O9jXFTXW6704vP7jf_8&usqp=CAU', name: 'Tool', price: '250000 KZT', rating: 9.2, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/pixel-13-chernyi-103421555/?c=750000000'},
  ];

  Share(link: string){
    const telegram = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegram, '_blank');
  }
}
