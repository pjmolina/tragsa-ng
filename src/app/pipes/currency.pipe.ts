import { Pipe, PipeTransform } from '@angular/core';

/**
 *   Requisitos:
 *   123456,678 | currency:'EUR'  ->  123456,68 €
 *   123456,678 | currency:'USD'  ->  $ 123456,68
 *
 *
 */

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number | undefined | null, currencyIso: string): string {
    if (value === null || value === undefined) {
      return '-';
    }
    currencyIso = currencyIso.toUpperCase();

    if (currencyIso === 'EUR') {
      return value.toFixed(2) + ' €';
    } else if (currencyIso === 'USD') {
      return '$ ' + value.toFixed(2);
    } else {
      return `${value} ${currencyIso}`;
    }
  }
}
