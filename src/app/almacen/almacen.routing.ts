import { Routes } from '@angular/router';
import { PricipalComponent } from './pricipal/pricipal.component';
import { SecundarioComponent } from './secundario/secundario.component';

export const routes: Routes = [
  { path: '', component: PricipalComponent },
  { path: 'principal', component: PricipalComponent },
  { path: 'secundario', component: SecundarioComponent },
];
