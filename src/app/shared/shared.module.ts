import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FontSizeDirective } from './directives/font-size/font-size.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    FontSizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective
  ]
})
export class SharedModule { }
