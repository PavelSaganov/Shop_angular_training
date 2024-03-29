import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrls: ['./cart-element.component.scss']
})
export class CartElementComponent {
  
  @Input() product!: Product;
  @Output() onDeleteItem = new EventEmitter<Product>() 
  
  deleteBtnClick(event: any) {
    this.onDeleteItem.emit(this.product);
  }
}
