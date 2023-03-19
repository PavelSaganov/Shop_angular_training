import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models//product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product!: Product;
  @Input() isAdmin!: boolean;
  @Output() onAddToCart = new EventEmitter<Product>() 

  buyBtnClick(event:any)
  {
    console.log(this.isAdmin)
    this.onAddToCart.emit(this.product);
  }
}