import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, Subscription } from 'rxjs';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';
@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent implements OnInit, OnDestroy {
  planet?: Planet;
  error = '';
  cargando = true;

  private sub!: Subscription;

  constructor(
    private planetService: PlanetService,
    private route: ActivatedRoute
  ) {
    console.log('Creado');
  }

  ngOnInit(): void {
    console.log('Inicializado');

    this.sub = this.route.paramMap.subscribe({
      next: (paramMap) => {
        const idString = paramMap.get('id');
        const id = idString ? +idString : 0;
        console.log('Obteniendo planeta ' + id);
        this.obtenerPlaneta(id);
      },
    });
  }

  ngOnDestroy(): void {
    console.log('Destruido');

    this.sub.unsubscribe();
  }

  obtenerPlaneta(id: number): void {
    this.cargando = true;

    this.planetService
      .getPlanet(id)
      .pipe(delay(2000))
      .subscribe({
        next: (data) => {
          this.planet = data;
          this.error = '';
          this.cargando = false;
        },
        error: (err) => this.handleError(err),
      });
  }

  handleError(err: any): void {
    this.planet = undefined;
    this.error = err.message;
    this.cargando = false;
  }
}
