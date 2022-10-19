import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { PlanetResponse } from './planet';

import { PlanetService } from './planet.service';

class MockHttpClient {
  get(): Observable<Partial<PlanetResponse>> {
    return of({
      name: 'ejemplo',
      population: '100',
      orbital_period: '3',
    } as Partial<PlanetResponse>);
  }
}

describe('PlanetService', () => {
  let service: PlanetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useClass: MockHttpClient }],
    });
    service = TestBed.inject(PlanetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getPlanet()', () => {
    const planet$ = service.getPlanet(7);
    expect(planet$).toBeTruthy();
  });
});
