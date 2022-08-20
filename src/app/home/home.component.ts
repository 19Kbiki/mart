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

  ngOnInit(): void {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
