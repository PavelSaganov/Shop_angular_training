import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { CartGuard } from './guards/cart.guard';



@NgModule({
  declarations: [
    ProcessOrderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CartGuard
  ]
})
export class OrdersModule { }
