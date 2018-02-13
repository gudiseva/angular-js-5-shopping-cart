import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCalendar]'
})
export class CalendarDirective {

  constructor(private eRef: ElementRef) { }

  @HostListener('keypress', ['$event'])
  updateValue(e) {
    //console.log(this.eRef.nativeElement);
    if(e.keyCode >= 48 && e.keyCode <= 57){
      const ele = this.eRef.nativeElement;
      if(ele.value.length === 2 || ele.value.length === 5){
        this.eRef.nativeElement.value += '/';
      }  
    } else {
      e.preventDefault();
    }
  }

}
