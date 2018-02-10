import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number, code: string = environment.currency): number {
    if(isNaN(value)){
			return value;
		} else {
			return this.changeValue(value, code);
		}
  }

  changeValue(value, code) {
    switch (code) {
      case 'USD' : value = value / 67;
      break;
      case 'EUR' : value = value / 87;
      break;
      case 'CAD' : value = value / 51;
      break;
      case 'GBP' : value = value / 78;
      break;
      default:
    }
    return value;
  }
  
}
