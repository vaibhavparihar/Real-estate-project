import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]',
})
export class PrevDirective {
  constructor(private element: ElementRef) {}

  @HostListener('click')
  prevFunction() {
    var element =
      this.element.nativeElement.parentElement.parentElement.children[0];
    var item = element.getElementsByClassName('item-card');
    element.prepend(item[item.length - 1]);
  }
}
