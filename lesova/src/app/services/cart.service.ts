import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [];

  constructor() { }

  addItemToCart(itemId, qty) {
    this.cartItems[this.cartItems.length] = {itemId : itemId, qty : qty};
    localStorage.setItem('lesovaCartItems', JSON.stringify(this.cartItems));
  }

  removeFromCart(itemId, qty) {
    let cartTempItems = [];

    this.cartItems.forEach( item => {
      if (item.itemId !== itemId) {
        cartTempItems[cartTempItems.length] = item;
      } else {
        if (item.qty - qty > 0) {
          item.qty = item.qty - qty;
          cartTempItems[cartTempItems.length] = item;
        }
      }
    });

    this.cartItems = cartTempItems;
    localStorage.setItem('lesovaCartItems', JSON.stringify(this.cartItems));
  }

  getItemsFromLocalStorage() {
    this.cartItems = JSON.parse(localStorage.getItem('lesovaCartItems'));
    console.log('cart items : ', this.cartItems);
  }

}
