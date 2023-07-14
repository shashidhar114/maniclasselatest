import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor(private element:ElementRef) { 
    console.log(element)
    this.element.nativeElement.style.color="red"
  }

}
