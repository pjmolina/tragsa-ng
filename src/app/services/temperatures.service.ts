import { Injectable } from '@angular/core';
import { WeatherData } from '../weather/weather';

@Injectable({ providedIn: 'root' })
export class TemperatureService {
  ciudades: WeatherData[] = [];

  get meanTemperature(): number {
    let suma = 0;
    this.ciudades.forEach((ciudad) => {
      suma += ciudad.temperature;
    });
    return this.ciudades.length ? suma / this.ciudades.length : 0;
  }
}
