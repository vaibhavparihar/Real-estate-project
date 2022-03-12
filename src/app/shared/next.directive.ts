import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]',
})
export class NextDirective {
  constructor(private element: ElementRef) {}

  @HostListener('click')
  nextFunction() {
    var element =
      this.element.nativeElement.parentElement.parentElement.children[0];
    var item = element.getElementsByClassName('item-card');
    element.append(item[0]);
  }
}
