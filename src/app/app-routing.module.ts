import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/components/add-product/add-product.component';
import { EditProductComponent } from './admin/components/edit-product/edit-product.component';
import { HaveAccessGuard } from './admin/guard/have-access.guard';
import { SureToLeaveGuard } from './admin/guard/sure-to-leave.guard';
import { WaitDataFromBackendGuard } from './admin/guard/wait-data-from-backend.guard';
import { LoginComponent } from './authorization/components/login/login.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { ProcessOrderComponent } from './orders/components/process-order/process-order.component';
import { IsCartEmptyGuard } from './orders/guards/is-cart-epmpty.guard';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductViewComponent } from './products/components/product-view/product-view.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'products',
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
    path: 'admin',
    title: 'Admin',
    canActivate:[HaveAccessGuard],
    children: [
      {
        path: 'product/add',
        component: AddProductComponent,
        title: 'Adding product'
      },
      {
        path: 'product/edit/:id',
        component: EditProductComponent,
        title: 'Editing product',
        canDeactivate: [SureToLeaveGuard],
        resolve: [WaitDataFromBackendGuard]
      }
    ]
  },
  {
    path: 'orders',
    component: ProcessOrderComponent,
    title: 'Process order',
    canActivate: [IsCartEmptyGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page not found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // Эти guards уже зарегистрированы в своем декораторе
  // тут их регистрировать не нужно
  // providers: [IsCartEmptyGuard, HaveAccessGuard, SureToLeaveGuard]
})
export class AppRoutingModule { }
