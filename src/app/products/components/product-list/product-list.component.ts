import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  private cartService: CartService
  products: Product[]

  constructor(productService: ProductService,
    cartService: CartService)
  {
    this.products = productService.getProducts();
    this.cartService = cartService;
  }

  addProductToCart(product: any):void
  {
    console.log('adding to cart: ' + product.name);
    this.cartService.addToCart(product);
  }
}
