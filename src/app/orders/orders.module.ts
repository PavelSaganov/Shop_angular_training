import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { IsCartEmptyGuard } from './guards/is-cart-epmpty.guard';



@NgModule({
  declarations: [
    ProcessOrderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    IsCartEmptyGuard
  ]
})
export class OrdersModule { }
