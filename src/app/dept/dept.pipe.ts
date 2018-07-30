import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dept'
})
export class DeptPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
