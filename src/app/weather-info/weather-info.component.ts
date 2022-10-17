import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../services/temperatures.service';
import { WeatherData } from '../weather/weather';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  messages: string[] = [];

  temperaturaMedia = 0;

  constructor(private temperatureService: TemperatureService) {}

  ngOnInit(): void {
    this.update();
  }
  onChange(change: WeatherData): void {
    // const msg =
    //   change.name + ' t=' + change.temperature + 'ºC ' + change.status;

    const msg = `Ciudad: ${change.name} ${change.temperature} ºC ${change.status}`;

    this.messages.push(msg);
  }

  update(): void {
    this.temperaturaMedia = this.temperatureService.meanTemperature;
  }
}
