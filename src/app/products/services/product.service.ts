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
    let prod = {} as Product;
    prod.id = 1;
    prod.name = 'Product 1';
    prod.description = 'Some description';
    prod.price = 120;
    prod.isAvailable = true;
    prod.category = Category.Clothes;

    let prod2 = {} as Product;
    prod2.id = 2;
    prod2.name = 'Product 2';
    prod2.description = 'Some description';
    prod2.price = 140;
    prod2.isAvailable = true;
    prod2.category = Category.ElectricalGoods

    let prod3 = {} as Product;
    prod3.id = 3;
    prod3.name = 'Product 3';
    prod3.description = 'Some description';
    prod3.price = 160;
    prod3.isAvailable = false;
    prod3.category = Category.Clothes

    let prod4 = {} as Product;
    prod4.id = 1;
    prod4.name = 'Product 4';
    prod4.description = 'Some description';
    prod4.price = 180;
    prod4.isAvailable = false;
    prod4.category = Category.MusicalGoods

    const result: Product[] = 
    [
      prod, prod2, prod3, prod4
    ];

    return result;
  }
}