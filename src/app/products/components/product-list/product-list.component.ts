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
  titleName: ElementRef<HTMLHeadingElement>|undefined;
  products!: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService)
  {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
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
    this.cartService.addToCart(product);
  }
}
