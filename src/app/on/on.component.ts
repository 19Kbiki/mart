import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-on',
  templateUrl: './on.component.html',
  styleUrls: ['./on.component.scss'],
})
export class OnComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  slidesStore = [
    {
      id: '1',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/1/5/1564290195_black_dal_1.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer / Fig',
      price: '₹ 280.00',
    },
    {
      id: '2',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/w/a/walnuts_2.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '3',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/t/o/toor_dal_2.png',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '4',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/w/h/white_jowar_1.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '5',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/w/h/whatsapp_image_2020-11-25_at_6.20.55_pm.jpeg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '6',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/b/r/brown_chana_whole_2.png',
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
