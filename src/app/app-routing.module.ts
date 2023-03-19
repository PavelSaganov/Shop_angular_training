import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { ProcessOrderComponent } from './orders/components/process-order/process-order.component';
import { CartGuard } from './orders/guards/cart.guard';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductViewComponent } from './products/components/product-view/product-view.component';

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
    path: 'order',
    component: ProcessOrderComponent,
    title: 'Processing order',
    canActivate: [CartGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CartGuard]
})
export class AppRoutingModule { }
