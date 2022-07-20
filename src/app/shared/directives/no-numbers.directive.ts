import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appNoNumbers]'
})
export class NoNumbersDirective {
  @Input() config: { color: string; } = { color: 'red' };

  input!: HTMLInputElement;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  @HostListener('keyup', ['$event.key']) onKeyUp(key: string) {
     if (Number.isInteger(+key)) {
      this.input.style.backgroundColor = this.config.color;
    } else {
      this.input.style.backgroundColor = 'unset';
    }
  }

}
