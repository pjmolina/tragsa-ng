import { Component, OnInit } from '@angular/core';
import { PlanetService } from './planet/planet.service';
import { LoggerService } from './services/logger.service';
import { TemperatureService } from './services/temperatures.service';
import { Persona } from './user/user.component';
import { WeatherData } from './weather/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular0';
  usuarioSeleccionado = '';
  messages: string[] = [];

  temperaturaMedia = 0;

  constructor(
    private logger: LoggerService,
    private temperatureService: TemperatureService,
    private planetService: PlanetService
  ) {}

  personas: Persona[] = [
    {
      name: 'Pedro',
      surname: 'Molina',
    },
    {
      name: 'Manuel',
      surname: 'Alvarez',
    },
    {
      name: 'Ana',
      surname: 'Perez',
    },
    {
      name: 'Alicia',
      surname: 'Gomez',
    },
    {
      name: 'Zacarias',
      surname: 'Gomez',
    },
  ];

  ngOnInit(): void {
    this.update();
  }
  update(): void {
    this.temperaturaMedia = this.temperatureService.meanTemperature;
  }

  onSelect(persona: Persona): void {
    this.logger.info('Componente padre. seleccionado: ' + persona.name);

    this.usuarioSeleccionado = persona.name;
  }

  onChange(change: WeatherData): void {
    // const msg =
    //   change.name + ' t=' + change.temperature + 'ºC ' + change.status;

    const msg = `Ciudad: ${change.name} ${change.temperature} ºC ${change.status}`;

    this.messages.push(msg);
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
