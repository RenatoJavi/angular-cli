import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetallesPage } from './movie-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: MovieDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetallesPageRoutingModule {}
