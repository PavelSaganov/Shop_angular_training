import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductViewComponent } from './products/components/product-view/product-view/product-view.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Products'
  },
  {
    path: 'product/:id',
    component: ProductViewComponent,
    title: 'Details about the product'
  },
  {
    path: 'cart',
    component: CartListComponent,
    title: 'Your cart'
  },
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
