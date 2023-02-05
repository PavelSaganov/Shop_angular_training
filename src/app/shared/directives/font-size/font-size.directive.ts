import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  @Input() font: number = 20
  
  constructor(
    private renderer: Renderer2, 
    private el: ElementRef) { 
    this.el.nativeElement.style.font = 12;
  }


  @HostListener('click')
  clicked(): void {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', 20);
  }

}
