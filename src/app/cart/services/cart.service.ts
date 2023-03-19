import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private localStorageKey: string =  'cart-list';
  public cart$: BehaviorSubject<Product[]> = new BehaviorSubject(this.getProducts());

  totalCost(): number {
    return this.getProducts().reduce((previous, cur) => previous + Number(cur.price), 0);
  }

  totalQuantity(): number {
    return this.getProducts().length;
  }

  getProducts(): Product[] {
    let jsonData = localStorage.getItem(this.localStorageKey);
    if (jsonData != null)
    {
      return JSON.parse(jsonData) as any as Product[];
    }

    return [];
  }

  isEmptyCart(): boolean
  {
    if (this.getProducts().length > 0)
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
    localStorage.removeItem(this.localStorageKey);
  }

  private changeQuantity(product: Product, count: number): void {
    console.log('chage on: ' + count);
    let currentCart = this.getProducts();
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        currentCart.push(product);
      }
    }

    if (count < 0) {
      for (let i = 0; i > count; i--) {
        let indexOfDeleted = currentCart.findIndex(prod => prod.id == product.id);
        if (indexOfDeleted >= 0) {
          currentCart = [...currentCart.slice(0, indexOfDeleted), ...currentCart.slice(indexOfDeleted + 1)];
        }
      }
    }

    localStorage.setItem(this.localStorageKey, JSON.stringify(currentCart));
    this.cart$.next(this.getProducts());
  }
}
