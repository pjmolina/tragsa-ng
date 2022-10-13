import { Pipe, PipeTransform } from '@angular/core';
import { Planet } from './planet';

@Pipe({
  name: 'searchBy',
})
export class SearchByPipe implements PipeTransform {
  transform(list: Planet[], searchString: string): Planet[] {
    if (!searchString) {
      return list;
    }
    return list.filter((it) =>
      it.name.toLowerCase().includes(searchString.toLowerCase())
    );
  }
}
