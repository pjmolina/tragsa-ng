import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];
  searchText = '';

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.planetService.getPlanets().subscribe({
      next: (data) => {
        this.planets = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  getPlanets(): void {
    console.log('Paso 1');

    this.planetService.getPlanets().subscribe({
      next: (data) => {
        console.log('Recibidos planetas');
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Observable completado');
      },
    });

    console.log('Paso 2');
  }
}
