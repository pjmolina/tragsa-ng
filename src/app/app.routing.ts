import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlanetDetailComponent } from './planet/planet-detail/planet-detail.component';
import { PlanetListComponent } from './planet/planet-list/planet-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'inicio', component: WelcomeComponent },
  { path: 'usuarios', component: UserListComponent },
  { path: 'planetas', component: PlanetListComponent },
  { path: 'planetas/:id', component: PlanetDetailComponent },
  { path: 'temperaturas', component: WeatherInfoComponent },
  {
    path: 'almacen',
    loadChildren: () =>
      import('./almacen/almacen.module').then((m) => m.AlmacenModule),
  },

  { path: '**', component: NotFoundComponent },
];
