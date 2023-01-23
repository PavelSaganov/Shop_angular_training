import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from 'src/app/products/enums/category';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] 

  constructor() {
    this.cart = [];
   }

  totalCost(): number {
    return this.cart.reduce((previous, cur) => previous + Number(cur.price), 0);
  }

  totalQuantity(): number {
    return this.cart.length;
  }

  getProducts(): Product[] {
    return this.cart;
  }

  getCart(): Product[] {
    return this.cart ?? [];
  }

  addToCart(product: Product): void
  {
    console.log('added to cart');
    this.cart.push(product);
  }

  deleteFromCart(product: Product)
  {
    let indexOfDeleted = this.cart.indexOf(product);
    this.cart.splice(indexOfDeleted, 1);
  }
}
