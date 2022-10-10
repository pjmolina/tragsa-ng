import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResaltaDirective } from './directives/resalta.directive';
import { UserComponent } from './user/user.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WeatherComponent,
    ResaltaDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    // 1. inyectar directamente la clase
    // LoggerService
    // 2. inyectar otra cosa  dar gato por liebre
    // { provide: LoggerService, useClass: LoggerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
