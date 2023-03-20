import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
