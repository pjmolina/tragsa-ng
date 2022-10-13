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
}
