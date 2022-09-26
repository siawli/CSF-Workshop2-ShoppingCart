import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CartDB } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  cartItems!: CartDB;

  @Output()
  itemToDelete = new Subject<number>();
  
  delete(num: string) {
    console.info("delete num: " + num);
    this.itemToDelete.next(Number(num));
    // delete this.cartItems[Number(num)];
  }

}
