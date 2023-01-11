import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/Product';
import { ProductService } from 'src/app/products/services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  products!: Product[]

  constructor(
    // private productService: ProductService,
    private cartService: CartService) {
  }

    ngOnInit(): void {
      this.products = this.cartService.getProducts();
  }

  trackByItems(index: number, item: Product) : number
  {
    return Number(item.price);
  }
}
