import { AfterContentChecked, ChangeDetectionStrategy, Component, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements AfterContentChecked {
  
  products: Product[];
  products$: Observable<Product[]>;
  totalCost: number = 0;
  totalQuantity: number = 0;
  
  constructor(private cartService: CartService) {
    this.products = cartService.getProducts();
    this.products$ = cartService.cart$;
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
