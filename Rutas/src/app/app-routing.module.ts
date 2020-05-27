import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaProductosHogarComponent } from './rutas/ruta-productos-hogar/ruta-productos-hogar.component';
import { RutaProductosVideojuegosComponent } from './rutas/ruta-productos-videojuegos/ruta-productos-videojuegos.component';
import { RutaCreditoPersonalComponent } from './rutas/ruta-credito-personal/ruta-credito-personal.component';
import { RutaCreditoTarjetaComponent } from './rutas/ruta-credito-tarjeta/ruta-credito-tarjeta.component';

const routes: Routes = [
  {
    path: 'home/app/app2', //tenemos 2 segmentos home y app

    component: RutaHomeComponent,
  },
  {
    path: 'creditos',
    component: RutaCreditosComponent,
    children: [
      {
        path: 'personal',
        component: RutaCreditoPersonalComponent,
      },
      {
        path: 'tarjeta',
        component: RutaCreditoTarjetaComponent,
      },
    ],
  },
  {
    path: 'productos',
    component: RutaProductosComponent,
    children: [
      {
        path: 'hogar',
        component: RutaProductosHogarComponent,
      },
      {
        path: 'videojuegos',
        component: RutaProductosVideojuegosComponent,
      },
    ],
  },
  {
    path: 'no-encontrada',
    component: RutaNoEncontradaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
