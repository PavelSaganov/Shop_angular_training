import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostBinding('style.background') background!: string;
  
  @HostListener('mouseenter')
  onMouseenter() {
    this.background = 'green';
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.background = '';
  }

}
