import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss'],
})
export class FibonacciComponent {
  numero: number | undefined = undefined;
  resultado = 0;
  ellapsed = 0;

  calcular(numero: number | undefined) {
    const t0 = new Date().getTime();
    if (numero !== undefined) {
      this.resultado = fib2(numero);
      const t1 = new Date().getTime();
      this.ellapsed = t1 - t0;
    }
  }
}

// Mnemoization / memorizar  / redis
const cache: { [key: number]: number } = {};

const fib2 = (n: number): number => {
  const found = cache[n];
  if (found) {
    // acierto en cache
    return found;
  }
  // no encontrado: calcular y poner en la cache
  const res = fib(n);
  cache[n] = res;
  return res;
};

const fib = (n: number): number => {
  console.log('fib ', n);
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib2(n - 2) + fib2(n - 1);
};
