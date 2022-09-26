import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  onAddItem = new Subject<number>();

  itemObj = {}

  addItem(num: number ) {
    console.info(">>>>> item number to be added: " + num);
    this.onAddItem.next(num);
  }

}
