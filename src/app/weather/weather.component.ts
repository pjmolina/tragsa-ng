import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TemperatureService } from '../services/temperatures.service';
import { WeatherData } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
  propiedad2 = 0;
  @Input() name: string = '';
  @Input() temperature = 0;
  @Input() status = '';
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() change = new EventEmitter<WeatherData>();

  constructor(
    private temperatureService: TemperatureService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const ciudad: WeatherData = {
      name: this.name,
      temperature: this.temperature,
      status: this.status,
    };
    this.temperatureService.ciudades.push(ciudad);
  }

  subirGrado(): void {
    // this.temperature++;
    this.propiedad2++;

    this.emitChanges();
  }
  bajarGrado(): void {
    // this.temperature--;
    this.propiedad2--;

    this.emitChanges();
  }

  private emitChanges(): void {
    this.change.emit({
      name: this.name,
      temperature: this.temperature,
      status: this.status,
    });
  }

  refresh() {
    this.cd.detach();
    // Mapa - 1000 puntos
    // for () {
    //   pr -> refresco
    //}
    this.cd.reattach();
  }
}
