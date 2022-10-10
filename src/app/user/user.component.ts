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

export interface Persona {
  name: string;
  surname: string;
}

let seq = 0;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name?: string = '';
  @Input() surname: string = '';
  @Output() seleccionado = new EventEmitter<Persona>();

  private idSeq: number = 0;

  constructor() {
    this.idSeq = seq++;
    console.log('Construyendo componente user ' + this.idSeq);
  }

  ngOnInit(): void {
    console.log('Inicializando componente user ' + this.idSeq);
  }
  ngOnDestroy(): void {
    console.log('Destuyendo componente user ' + this.idSeq);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name']) {
      //
    }

    console.log(changes);
  }

  pulsado(): void {
    console.log('Pulsado en  ' + this.name);

    this.seleccionado.emit({
      name: this.name || '',
      surname: this.surname,
    });
  }
}
