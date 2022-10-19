import { Pipe, PipeTransform } from '@angular/core';

//  { condicion | sino }  Sí No -

@Pipe({
  name: 'sino',
})
export class SinoPipe implements PipeTransform {
  transform(value: boolean | null | undefined): string {
    switch (value) {
      case true:
        return 'Sí';
      case false:
        return 'No';
      default:
        return '-';
    }
  }
}
