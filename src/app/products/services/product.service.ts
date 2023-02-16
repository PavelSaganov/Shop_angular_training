import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../enums/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public productList$: BehaviorSubject<Product[]> = new BehaviorSubject(this.getProducts());

  getProducts(): Product[]
  {
    const result: Product[] = 
    [
      new Product(1, 'Product 1', 'Some description', 120, true, Category.Clothes),
      new Product(2, 'Product 2', 'Some description', 140, true, Category.ElectricalGoods),
      new Product(3, 'Product 3', 'Some description', 160, false, Category.Clothes),
      new Product(4, 'Product 4', 'Some description', 180, false, Category.MusicalGoods),
    ];

    return result;
  }
}