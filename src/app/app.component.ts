import { Component } from '@angular/core';
import { CartDB, cartDB } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ws2ShoppingCart';

  cart: CartDB = {};

  itemToAdd(num: number) {
    if (!this.cart[num])
      this.cart[num] = 0
    this.cart = {...this.cart, [num]: this.cart[num]+1}
  }

  toDeleteItem(num: number) {
    delete this.cart[num];
  }
}
