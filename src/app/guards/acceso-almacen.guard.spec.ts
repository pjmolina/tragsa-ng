import { TestBed } from '@angular/core/testing';

import { AccesoAlmacenGuard } from './acceso-almacen.guard';

describe('AccesoAlmacenGuard', () => {
  let guard: AccesoAlmacenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccesoAlmacenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
