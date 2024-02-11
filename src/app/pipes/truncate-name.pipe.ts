import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateName',
  standalone: true
})
export class TruncateNamePipe implements PipeTransform {

  transform(value: string, maxLength: number = 16, ellipse: string = "..."): unknown {
    if (value.length > maxLength){
      return value.slice(0, maxLength) + ellipse;
    }


    return value;
  }

}
