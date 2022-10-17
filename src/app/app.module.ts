import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { ResaltaDirective } from './directives/resalta.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { PlanetDetailComponent } from './planet/planet-detail/planet-detail.component';
import { PlanetListComponent } from './planet/planet-list/planet-list.component';
import { SearchByPipe } from './planet/search-by.pipe';
import { UserComponent } from './user/user.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { WeatherComponent } from './weather/weather.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WeatherComponent,
    ResaltaDirective,
    PlanetListComponent,
    CurrencyPipe,
    SearchByPipe,
    WelcomeComponent,
    WeatherInfoComponent,
    NotFoundComponent,
    PlanetDetailComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    // 1. inyectar directamente la clase
    // LoggerService
    // 2. inyectar otra cosa  dar gato por liebre
    // { provide: LoggerService, useClass: LoggerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
