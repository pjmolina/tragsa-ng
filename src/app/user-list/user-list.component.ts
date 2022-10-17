import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { Persona } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  usuarioSeleccionado = '';
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

  constructor(private logger: LoggerService) {}

  onSelect(persona: Persona): void {
    this.logger.info('Componente padre. seleccionado: ' + persona.name);

    this.usuarioSeleccionado = persona.name;
  }
}
