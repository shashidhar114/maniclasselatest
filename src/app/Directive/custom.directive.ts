import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  
  @Input() sendClass:string="";

  constructor(private element:ElementRef) { }

  ngOnInit(){
     this.element.nativeElement.classlist.add(this.sendClass);
  }
}
