import { Injectable } from '@angular/core';
import { Category } from 'src/app/products/enums/category';
import { Product } from 'src/app/products/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getProducts(): Product[] {
    const result: Product[] =
      [
        new Product('Product 1', 'Some description', 120, true, Category.Clothes),
        new Product('Product 2', 'Some description', 140, true, Category.ElectricalGoods),
      ];

    return result;
  }
}
