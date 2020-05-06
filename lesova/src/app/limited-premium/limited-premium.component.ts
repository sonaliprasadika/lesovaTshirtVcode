import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-limited-premium',
  templateUrl: './limited-premium.component.html',
  styleUrls: ['./limited-premium.component.css']
})
export class LimitedPremiumComponent implements OnInit {

  limitedPremiumItems = [
    {
      'productId' : 'LSV 7612',
      'image' : 'img/limited/lim1.png',
      'name' : 'LSV 7612',
      'onSale' : false,
      'price' : '1000.00',
      'discountPrice' : '800.00',
      'shortDescription' : 'Ladies T-shirt',
      'longDescription' : 'Fashionable ladies t-shirt'
    },
    {
      'productId' : 'LSV 7612',
      'image' : 'img/limited/lim2.png',
      'name' : 'LSV 7612',
      'onSale' : true,
      'price' : '1000.00',
      'discountPrice' : '800.00',
      'shortDescription' : 'Ladies T-shirt',
      'longDescription' : 'Fashionable ladies t-shirt'
    },
    {
      'productId' : 'LSV 7612',
      'image' : 'img/limited/lim3.png',
      'name' : 'LSV 7612',
      'onSale' : true,
      'price' : '1000.00',
      'discountPrice' : '800.00',
      'shortDescription' : 'Ladies T-shirt',
      'longDescription' : 'Fashionable ladies t-shirt'
    },
    {
      'productId' : 'LSV 7612',
      'image' : 'img/limited/lim4.png',
      'name' : 'LSV 7612',
      'onSale' : true,
      'price' : '1000.00',
      'discountPrice' : '800.00',
      'shortDescription' : 'Ladies T-shirt',
      'longDescription' : 'Fashionable ladies t-shirt'
    }
  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(itemId, qty) {
    this.cartService.addItemToCart(itemId, qty);
  }

}
