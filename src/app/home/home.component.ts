import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  products = [
    {
      url: 'https://www.kiranamarket.com/pub/media/wysiwyg/Grocery-Items-Cat.jpg',
      name: 'Grocery',
      pra: 'PRODUCTS',
    },
    {
      url: 'https://www.kiranamarket.com/pub/media/wysiwyg/Health-Personal-Care-Items.jpg',
      name: 'Health & Personal Care',
      pra: 'PRODUCTS',
    },
    {
      url: 'https://www.kiranamarket.com/pub/media/wysiwyg/Grocery-Items-Cat.jpg',
      name: 'Grocery',
      pra: 'PRODUCTS',
    },
    {
      url: 'https://www.kiranamarket.com/pub/media/wysiwyg/Grocery-Items-Cat.jpg',
      name: 'Grocery',
      pra: 'PRODUCTS',
    },
    {
      url: 'https://www.kiranamarket.com/pub/media/wysiwyg/Grocery-Items-Cat.jpg',
      name: 'Grocery',
      pra: 'PRODUCTS',
    },
    {
      url: 'https://www.kiranamarket.com/pub/media/wysiwyg/Grocery-Items-Cat.jpg',
      name: 'Grocery',
      pra: 'PRODUCTS',
    },
    {
      url: 'https://www.kiranamarket.com/pub/media/wysiwyg/Grocery-Items-Cat.jpg',
      name: 'Grocery',
      pra: 'PRODUCTS',
    },
    {
      url: 'https://www.kiranamarket.com/pub/media/wysiwyg/Grocery-Items-Cat.jpg',
      name: 'Grocery',
      pra: 'PRODUCTS',
    },
  ];

  // product slide arry
  slidesStore = [
    {
      id: '1',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/a/n/anjeer_1.jpg',
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
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/s/a/saltedpista1_1.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '4',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/g/r/greenpista.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '5',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/b/l/blackraisin.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '6',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/d/r/drydates.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '7',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/c/a/cashew_whole_meidum_3.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '8',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/c/a/cashew_spilt_1_2.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
  ];
  // product slide arrry end

  scendStore = [
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
  thirdStore = [
    {
      id: '1',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/2/0/20.0_7.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer / Fig',
      price: '₹ 280.00',
    },
    {
      id: '2',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/h/t/httpecx.images-amazon.comimagesi511n7r-uqol.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '3',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/p/a/palm.png',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '4',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/8/9/8901512102805.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '5',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/g/r/gr63.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '6',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/g/r/gr28.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '7',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/dd9c27bb1f3e0dacc230adeb8e8122ed/8/9/8908003198095_1.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
    {
      id: '8',
      url: 'https://www.kiranamarket.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/8/9/8906007280242.jpg',
      urlim:
        'https://www.seekpng.com/png/detail/411-4110082_four-half-stars-0-copy-star-rating-with.png',
      name: 'Anjeer/Fig',
      price: '₹280.00',
    },
  ];
  ngOnInit(): void {}
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
