import { AfterContentChecked, ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements AfterContentChecked, OnInit {
  
  products!: Product[];
  products$!: Observable<Product[]>;
  totalCost: number = 0;
  totalQuantity: number = 0;
  sortByIncreasing: boolean = false;
  propertyToSort: string = "pice";
  
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
    this.products$ = this.cartService.cart$;
  }

  ngAfterContentChecked(): void {
    this.totalCost = this.cartService.totalCost();
    this.totalQuantity = this.cartService.totalQuantity();
  }

  trackByItems(index: number, item: Product) : number
  {
    return Number(item.price);
  }

  deleteFromCart(product: Product)
  {
    this.cartService.decreaseQuantity(product);
  }
}
