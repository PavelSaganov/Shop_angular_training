import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements AfterViewInit, OnInit {

  @ViewChild("appTitle", { static: false })
  titleName: ElementRef<HTMLHeadingElement>|undefined
  private cartService: CartService
  products: Product[]
  products$: Observable<Product[]>;


  constructor(private productService: ProductService,
    cartService: CartService)
  {
    this.products = productService.getProducts();
    this.products$ = this.productService.productList$;
    this.cartService = cartService;
  }

  ngOnInit(): void {
    this.products$ = this.productService.productList$;
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
