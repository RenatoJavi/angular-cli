import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetallesPageRoutingModule } from './movie-detalles-routing.module';

import { MovieDetallesPage } from './movie-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetallesPageRoutingModule
  ],
  declarations: [MovieDetallesPage]
})
export class MovieDetallesPageModule {}
