import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FontSizeDirective } from './directives/font-size/font-size.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HighlightDirective,
    FontSizeDirective,
    OrderByPipe,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    OrderByPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
