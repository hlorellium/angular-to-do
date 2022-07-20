import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeUppercase'
})
export class MakeUppercasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
