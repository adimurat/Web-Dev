import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css'
})
export class HomeProductsComponent implements OnInit{
  title:string | undefined;
  

  ngOnInit(): void {
    this.title = 'Kitchen Tools';
    
  }
  
  products: {image: string, name:string, price: string, rating: number, ratingImg: string , description: string, link: string,}[] = [
    {image: 'https://images.deal.by/161197030_w300_h300_nabor-kuhonnyh-prinadlezhnostej.jpg', name: 'Kitchen tools', price: '1000000 KZT', rating: 7.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ki4prFjKt4CFiS4KJHMM7fvdPShW3Vl9J9lXmXb-GaVaxDn4DgvI-mH8Y4qsZxrWvx0&usqp=CAU', name: 'Knife', price: '100000 KZT', rating: 4.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/chuwi-herobook-pro-14-1-b08316yskh-serebristyi-101675028/?c=750000000'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqHW8MFPa0Ah8BLB_K7mJPaPfO9mEvVwUBp7SnFqztAgbEBkq0HDfCWFq_HaV7Jsrg7Y&usqp=CAU', name: 'Kitchen tools', price: '50000 KZT', rating: 7.1, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'},
    {image: 'https://atmo-suvenir.ru/upload/iblock/8ce/8ce5d44eeb6c00fb2250a616ce2c8f97.jpg', name: 'Tool', price: '60000 KZT', rating: 5.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/colmi-p28-plus-chernyi-106096505/?c=750000000'},
    {image: 'https://shafran.life/wp-content/uploads/2023/09/img_0463.webp', name: 'Kettle', price: '200000 KZT', rating: 8.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000'},
    {image: 'https://family.ua/assets/cache/images/500x500/images/catalog/18621/18621.jpg', name: 'Tool', price: '30000 KZT', rating: 6.1, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/htc-wireless-headphone-1-chernyi-111972451/?c=750000000'},
    {image: 'https://images.satu.kz/198632896_w300_h300_xiaomi-mpbj001acm-1a-smart-blender.jpg', name: 'Blender', price: '700000 KZT', rating: 7.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRco3doFDonWlAl623yS1kLtHYpqaJTjngbhxn6Kl9B5JfMufILuLG8G9N0PzUExmtCnss&usqp=CAU', name: 'Tool', price: '500000 KZT', rating: 5.3, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnU7J5pmH4yD7Znenkcvg5gSoE696qwbKmjA&usqp=CAU', name: 'Tool', price: '300000 KZT', rating: 6.3, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvn2RNsligK8SpLP3MCSRzgnrhfkndRmC5RmQrlUnR2l_KO8_O9jXFTXW6704vP7jf_8&usqp=CAU', name: 'Tool', price: '250000 KZT', rating: 9.2, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/pixel-13-chernyi-103421555/?c=750000000'},
  ];

  Share(link: string){
    const telegram = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegram, '_blank');
  }
}
