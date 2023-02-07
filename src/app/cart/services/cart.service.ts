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
    // Number(cur.price) = +cur.price - так короче
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

  isEmptyCart(): boolean
  {
    if (this.cart.length > 0)
    {
      return false;
    }

    return true;
  }

  increaseQuantity(product: Product, count: number = 1): void
  {
    this.changeQuantity(product, count);
  }

  decreaseQuantity(product: Product, count: number = 1): void {
    console.log('descrease on ' + count);
    this.changeQuantity(product, -count);
  }

  removeAllProducts(): void
  {
    this.cart = [];
  }

  private changeQuantity(product: Product, count: number): void {
    console.log('chage on: ' + count);
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        this.cart.push(product);
      }
    }

    if (count < 0) {
      for (let i = 0; i > count; i--) {
        let indexOfDeleted = this.cart.indexOf(product);
        console.log(indexOfDeleted);
        if (indexOfDeleted != undefined) {
          this.cart = [...this.cart.slice(0, indexOfDeleted), ...this.cart.slice(indexOfDeleted + 1)];
          console.log(this.cart);
        }
      }
    }
  }
}
