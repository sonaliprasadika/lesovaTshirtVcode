import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-offset-panel',
  templateUrl: './offset-panel.component.html',
  styleUrls: ['./offset-panel.component.css']
})
export class OffsetPanelComponent implements OnInit {

  itemsBought = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.itemsBought = this.cartService.cartItems;

    this.cartService.getItemsFromLocalStorage();
  }

}
