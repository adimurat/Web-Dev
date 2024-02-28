import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrl: './toys.component.css'
})
export class ToysComponent implements OnInit{
  title:string | undefined;
  

  ngOnInit(): void {
    this.title = 'Toys';
    
  }
  
  products: {image: string, name:string, price: string, rating: number, ratingImg: string , description: string, link: string}[] = [
    {image: 'https://www.travelingbaby.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/n/infant_toys_1_1_2.jpg', name: 'Baby toys', price: '1000000 KZT', rating: 7.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'},
    {image: 'https://www.melissaanddoug.com/cdn/shop/products/MandD_Kits_2_0_12MonthOld_Birthday_Bundle_121922-7792.jpg?v=1687537302&width=750', name: 'Toy', price: '100000 KZT', rating: 4.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/chuwi-herobook-pro-14-1-b08316yskh-serebristyi-101675028/?c=750000000'},
    {image: 'https://rukminim2.flixcart.com/image/850/1000/ktd9mkw0/learning-toy/s/m/9/pop-it-fidget-toys-pop-it-fidget-toy-set-pop-its-fidget-toys-original-imag6pv4cmgdybg9.jpeg?q=90&crop=false', name: 'Popit', price: '50000 KZT', rating: 7.1, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'},
    {image: 'https://down-ph.img.susercontent.com/file/550855d5c71409f18492c8d63dadb289', name: 'Car', price: '60000 KZT', rating: 5.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/colmi-p28-plus-chernyi-106096505/?c=750000000'},
    {image: 'https://p7014794.vo.llnwd.net/e1/media/catalog/product/cache/0d20016c3cc1e67d02d0cc11108fe39c/4/1/4125-plan-toys-bee-hives-2.jpg', name: 'Bee', price: '200000 KZT', rating: 8.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000'},
    {image: 'https://www.littletikes.com/cdn/shop/collections/rescue_tales_250x250@2x.jpg?v=1631896893', name: 'Dog', price: '30000 KZT', rating: 6.1, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/htc-wireless-headphone-1-chernyi-111972451/?c=750000000'},
    {image: 'https://mamasandpapas.au/cdn/shop/products/mamas-papas-soft-toys-welcome-to-the-world-soft-toy-archie-elephant-30951290142885_1200x.jpg?v=1674830554', name: 'Big elephant', price: '700000 KZT', rating: 7.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000'},
    {image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GF/JI/DZ/102064656/patoys-baby-car-toy-vehicle-4x4-rechargeable-battery-operated-ig-kids-car.jpg', name: 'Car', price: '500000 KZT', rating: 5.3, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000'},
    {image: 'https://www.lego.com/cdn/cs/set/assets/blt21a0f0aa8cab7727/60430.png?fit=crop&quality=80&width=600&height=600&dpr=1', name: 'Lego', price: '300000 KZT', rating: 6.3, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000'},
    {image: 'https://5.imimg.com/data5/BQ/YB/GLADMIN-11586280/barbie-dreamhouse.png', name: 'Barbie', price: '250000 KZT', rating: 9.2, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/pixel-13-chernyi-103421555/?c=750000000'},
  ];

  Share(link: string){
    const telegram = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegram, '_blank');
  }
}
