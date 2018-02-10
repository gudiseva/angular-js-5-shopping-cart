import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(value: any[],
     key: string = '',
     type: string = '',
     data: any): any[] {

      if(key === '' || type === '' || data === undefined || value.length === 0) {  // == checks only the value
        return value;
      } else {
        return this.filterData(value, key, type, data);
      }
  }

  filterData(value, key, type, data) {
    let filtered;
    data = eval(data);
    switch(type) {
      case '=' : filtered = _.filter(value, (d) => d[key] === data);
      break;
      case '>' : filtered = _.filter(value, (d) => d[key] > data);
      break;
      case '<' : filtered = _.filter(value, (d) => d[key] < data);
      break;
      case '>=' : filtered = _.filter(value, (d) => d[key] >= data);
      break;
      case '<=' : filtered = _.filter(value, (d) => d[key] <= data);
      break;
      case '!=' : filtered = _.filter(value, (d) => d[key] !== data);
      break;
      default:
    }
    return filtered;
  }

}
