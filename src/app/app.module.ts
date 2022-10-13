import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ResaltaDirective } from './directives/resalta.directive';
import { PlanetListComponent } from './planet/planet-list/planet-list.component';
import { UserComponent } from './user/user.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyPipe } from './pipes/currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WeatherComponent,
    ResaltaDirective,
    PlanetListComponent,
    CurrencyPipe,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    // 1. inyectar directamente la clase
    // LoggerService
    // 2. inyectar otra cosa  dar gato por liebre
    // { provide: LoggerService, useClass: LoggerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
