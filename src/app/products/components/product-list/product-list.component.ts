import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements AfterViewInit {

  @ViewChild("appTitle", { static: false })
  titleName: ElementRef<HTMLHeadingElement>|undefined
  private cartService: CartService
  products: Product[]

  constructor(productService: ProductService,
    cartService: CartService)
  {
    this.products = productService.getProducts();
    this.cartService = cartService;
  }

  ngAfterViewInit() : void
  {
    if (this.titleName !== undefined)
    {
      this.titleName.nativeElement.textContent = "product-list";
    }
  }

  addProductToCart(product: any):void
  {
    console.log('adding to cart: ' + product.name);
    this.cartService.increaseQuantity(product);
  }
}
