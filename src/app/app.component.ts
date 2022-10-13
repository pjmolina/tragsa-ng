import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlanetService } from './planet/planet.service';
import { LoggerService } from './services/logger.service';
import { SessionService } from './services/session.service';
import { TemperatureService } from './services/temperatures.service';
import { Persona } from './user/user.component';
import { WeatherData } from './weather/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular0';
  usuarioSeleccionado = '';
  messages: string[] = [];

  temperaturaMedia = 0;

  userName = '';
  role = '';
  mensajes = '';

  sub1?: Subscription;
  sub2?: Subscription;

  constructor(
    private logger: LoggerService,
    private temperatureService: TemperatureService,
    private planetService: PlanetService,
    private sessionService: SessionService
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

    this.sub1 = this.sessionService.user$.subscribe({
      next: (data) => {
        this.mensajes += JSON.stringify(data) + ' ';
      },
      error: (err) => {},
    });

    this.sub2 = this.sessionService.user$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {},
    });
  }
  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
      this.sub1 = undefined;
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
      this.sub2 = undefined;
    }
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

  onLogin() {
    this.sessionService.login(this.userName, this.role);
  }
  onLogout() {
    this.sessionService.logout();
  }
}
