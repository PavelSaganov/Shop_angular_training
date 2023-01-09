import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartElementComponent } from './components/cart-element/cart-element.component';
import { CartListComponent } from './components/cart-list/cart-list.component';



@NgModule({
  declarations: [
    CartElementComponent,
    CartListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartElementComponent,
    CartListComponent
  ]
})
export class CartModule { }
