import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.scss'],
})
export class BestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  slidesStore = [
    {
      id: '1',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/h/t/httpecx.images-amazon.comimagesi41slgwr-8jl.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer / Fig',
      price: '₹ 280.00',
    },
    {
      id: '2',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/7/6/7622201423131.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '3',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/4/0/40.0_1.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '4',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/4/2/42_1_1.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '5',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/5/8/580.0.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '6',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/1/8/18.0_1_1.jpg',
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
        items: 2,
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
