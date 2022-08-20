import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  slidesStore = [
    {
      id: '1',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/5/1/51htz8zajyl._sl1100_.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer / Fig',
      price: '₹ 280.00',
    },
    {
      id: '2',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/5/1/51wswfg9f1l._sl1000_.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '3',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/7/1/71vgqgzouil._sl1500_.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '4',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/4/1/41d4hw1iqnl.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '5',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/8/1/81cffnwoqpl._sl1500_.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '6',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/6/1/61jcytadnzl._sl1500_.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '7',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/b/r/brown_chana_whole_2.png',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '8',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/c/h/chana_dal_1.png',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 20,
    navText: [
      "<div class='nav-button-prev owl-prev'>‹</div>",
      "<div class='nav-button-next owl-next'>›</div>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };
}
