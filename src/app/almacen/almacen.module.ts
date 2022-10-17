import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './almacen.routing';
import { PricipalComponent } from './pricipal/pricipal.component';
import { SecundarioComponent } from './secundario/secundario.component';

@NgModule({
  declarations: [PricipalComponent, SecundarioComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AlmacenModule {}
