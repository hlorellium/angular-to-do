import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appLogSomething]'
})
export class LogSomethingDirective {
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
    this.textDecoration = 'underline';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textDecoration = 'none';
  }

  @HostBinding('style.textDecoration') textDecoration!: string;



  constructor() { }

}
