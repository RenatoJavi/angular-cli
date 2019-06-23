import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';

const routes: Routes = [
  {
    path: 'home/app',
    component: RutaHomeComponent
  },

  {
    path: 'productos',
    component: RutaProductosComponent
  },
  { path: 'creditos', component: RutaCreditosComponent },
  {
    path: 'no-encontrada',
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ], //le paso la lista de rutas creada
  exports: [RouterModule]
})
export class AppRoutingModule {}
