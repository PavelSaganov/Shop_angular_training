import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/products/models/product';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  product: Product | null = null;

  constructor(private route: ActivatedRoute,
    private productService: ProductService)
  {
    
  }

  ngOnInit()
  {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    let productById = this.productService.getProducts().find(p => p.id == id);
    if (productById != undefined || productById != null)
    {
      this.product = productById;
    }
    
  }
}
