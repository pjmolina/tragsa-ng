import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataPage, Planet, PlanetResponse } from './planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  getPlanet(id: number): Observable<Planet> {
    const safeId = encodeURIComponent(id); // ' ' -> %20
    const url = `https://swapi.dev/api/planets/${safeId}`;

    return this.http
      .get<PlanetResponse>(url, {
        headers: {
          accept: 'application/json',
        },
      })
      .pipe(map((r) => toPlanet(r)));
  }

  getPlanets(): Observable<Planet[]> {
    const url = 'https://swapi.dev/api/planets';

    return this.http
      .get<any>(url, {
        headers: {
          accept: 'application/json',
        },
      })
      .pipe(
        map((res: DataPage<any>) => {
          return res.results.map((it) => toPlanet(it));
        })
      );
  }
}

function toPlanet(r: PlanetResponse): Planet {
  const planet: Planet = {
    name: r.name,
    rotation_period: parseInt(r.rotation_period, 10),
    orbital_period: parseInt(r.orbital_period, 10),
    climate: r.climate,
    terrain: r.terrain,
    surface_water: parseInt(r.surface_water, 10),
    population: parseInt(r.population, 10),
    residents: r.residents,
    films: r.films,
    created: new Date(r.created),
    edited: new Date(r.edited),
    url: r.url,
  };
  return planet;
}
