import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [AppComponent, UserComponent, WeatherComponent],
  imports: [BrowserModule],
  providers: [
    // 1. inyectar directamente la clase
    // LoggerService
    // 2. inyectar otra cosa  dar gato por liebre
    // { provide: LoggerService, useClass: LoggerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
