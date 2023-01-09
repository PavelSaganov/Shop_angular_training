import { Injectable } from '@angular/core';
import { Category } from '../enums/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[]
  {
    const result: Product[] = 
    [
      new Product('Product 1', 'Some description', 120, true, Category.Clothes),
      new Product('Product 2', 'Some description', 140, true, Category.ElectricalGoods),
      new Product('Product 3', 'Some description', 160, false, Category.Clothes),
      new Product('Product 4', 'Some description', 180, false, Category.MusicalGoods),
    ];

    return result;
  }

  addProductToCart(): void
  {

  }
}