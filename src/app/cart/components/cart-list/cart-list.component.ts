import { Component } from '@angular/core';
import { Product } from 'src/app/products/models/Product';
import { ProductService } from 'src/app/products/services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  
  products: Product[]

  constructor(private productService: ProductService, 
    private cartService: CartService) {
    this.products = cartService.getProducts();
  }

  trackByItems(index: number, item: Product) : number
  {
    return Number(item.price);
  }
}
