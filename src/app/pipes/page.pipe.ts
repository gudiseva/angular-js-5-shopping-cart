import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {

  transform(value: any[], size: number = 10, page: number = 0): any {
    if(value.length <= size){
      return value;
    } else {
      let pageData = _.chunk(value, size)[page];
      return pageData;
    }
  }

}
