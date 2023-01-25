import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartElementComponent } from './components/cart-element/cart-element.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CartElementComponent,
    CartListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartElementComponent,
    CartListComponent
  ]
})
export class CartModule { }
