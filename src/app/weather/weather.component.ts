import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherData } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  @Input() name: string = '';
  @Input() temperature = 0;
  @Input() status = '';
  @Output() change = new EventEmitter<WeatherData>();

  subirGrado(): void {
    this.temperature++;

    this.emitChanges();
  }
  bajarGrado(): void {
    this.temperature--;

    this.emitChanges();
  }

  private emitChanges(): void {
    this.change.emit({
      name: this.name,
      temperature: this.temperature,
      status: this.status,
    });
  }
}
