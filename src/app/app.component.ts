import { Component } from '@angular/core';
import { Persona } from './user/user.component';
import { WeatherData } from './weather/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular0';
  usuarioSeleccionado = '';
  messages: string[] = [];

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

  onSelect(persona: Persona): void {
    console.log('Componente padre. seleccionado: ' + persona.name);
    this.usuarioSeleccionado = persona.name;
  }

  onChange(change: WeatherData): void {
    // const msg =
    //   change.name + ' t=' + change.temperature + 'ºC ' + change.status;

    const msg = `Ciudad: ${change.name} ${change.temperature} ºC ${change.status}`;

    this.messages.push(msg);
  }
}
