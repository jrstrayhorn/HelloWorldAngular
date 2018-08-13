import { Directive, HostListener, ElementRef, Input } from '@angular/core';

// can use custom directives to have more control over DOM element behavior
// can pass data with input properties
// if only one property can use as alias and simply usage
// use hostlistener decorator to listen to DOM events of host DOM element for directive

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  // gives us reference to DOM element
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }



}
