import { Component, OnInit } from '@angular/core';
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
    private temperatureService: TemperatureService
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
}
