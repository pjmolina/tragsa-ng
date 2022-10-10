import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { LoggerService } from '../services/logger.service';

export interface Persona {
  name: string;
  surname: string;
}

let seq = 0;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [],
})
export class UserComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name?: string = '';
  @Input() surname: string = '';
  @Output() seleccionado = new EventEmitter<Persona>();

  private idSeq: number = 0;

  constructor(private logger: LoggerService) {
    this.idSeq = seq++;
    this.logger.info('Construyendo componente user ' + this.idSeq);
  }

  ngOnInit(): void {
    this.logger.info('Inicializando componente user ' + this.idSeq);
  }
  ngOnDestroy(): void {
    this.logger.info('Destruyendo componente user ' + this.idSeq);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name']) {
      //
    }

    console.log(changes);
  }

  pulsado(): void {
    this.logger.info('Pulsado en  ' + this.name);

    this.seleccionado.emit({
      name: this.name || '',
      surname: this.surname,
    });
  }
}
