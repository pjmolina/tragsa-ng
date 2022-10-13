import { CurrencyPipe } from './currency.pipe';

/**
 *   Requisitos:
 *   123456,678 | currency:'EUR'  ->  123456,68 €
 *   123456,678 | currency:'USD'  ->  $ 123456,68
 *
 *
 */

describe('CurrencyPipe', () => {
  it('should 123456,678 | currency:"EUR"  ->  123456.68 €', () => {
    const sut = new CurrencyPipe();
    const res = sut.transform(123456.678, 'EUR');

    expect(res).toBe('123456.68 €');
  });
  it("123456,678 | currency:'USD'  ->  $ 123456.68", () => {
    const sut = new CurrencyPipe();
    const res = sut.transform(123456.678, 'USD');

    expect(res).toBe('$ 123456.68');
  });
  it("123456,678 | currency:'usd'  ->  $ 123456.68", () => {
    const sut = new CurrencyPipe();
    const res = sut.transform(123456.678, 'usd');

    expect(res).toBe('$ 123456.68');
  });
  it('should return "-" when receiving a null or undefined', () => {
    const sut = new CurrencyPipe();
    const res = sut.transform(null, 'USD');

    expect(res).toBe('-');
  });
  it('should return default on unknown currencies (YEN)', () => {
    const sut = new CurrencyPipe();
    const res = sut.transform(123456.678, 'YEN');

    expect(res).toBe('123456.678 YEN');
  });
});
