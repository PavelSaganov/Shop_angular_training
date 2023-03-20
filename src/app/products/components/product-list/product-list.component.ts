import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authorization/services/auth.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements AfterViewInit, OnInit {

  @ViewChild("appTitle", { static: false })
  titleName: ElementRef<HTMLHeadingElement>|undefined
  products!: Product[]
  products$: Observable<Product[]>;
  isAdmin!: boolean;


  constructor(private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService)
  {
    this.products$ = this.productService.productList$;
    this.cartService = cartService;
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isCurrentUserAdmin();
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
