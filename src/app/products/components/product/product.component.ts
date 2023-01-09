import { Component, Input } from '@angular/core';
import { Product } from '../../models//product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product!: Product;

  onAddToCart() {
    console.log('Product added to cart');
  }
}