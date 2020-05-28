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
import { RutaProductosVideojuegosAventurasComponent } from './rutas/ruta-productos-videojuegos-aventuras/ruta-productos-videojuegos-aventuras.component';
import { RutaProductosVideojuegosCombateComponent } from './rutas/ruta-productos-videojuegos-combate/ruta-productos-videojuegos-combate.component';
import { RutaProductosVideojuegosAventurasJunglaComponent } from './rutas/ruta-productos-videojuegos-aventuras-jungla/ruta-productos-videojuegos-aventuras-jungla.component';
import { RutaProductosVideojuegosAventurasMarioCarComponent } from './rutas/ruta-productos-videojuegos-aventuras-mario-car/ruta-productos-videojuegos-aventuras-mario-car.component';
import { RutaProductosVideojuegosAventurasTarzanComponent } from './rutas/ruta-productos-videojuegos-aventuras-tarzan/ruta-productos-videojuegos-aventuras-tarzan.component';

const routes: Routes = [
  {
    path: 'home/app', //tenemos 2 segmentos home y app

    component: RutaHomeComponent,
  },
  {
    path: 'creditos/:idcreditos',
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
        children: [
          {
            path: 'aventuras',
            component: RutaProductosVideojuegosAventurasComponent,
            children: [
              {
                path: 'jungla',
                component: RutaProductosVideojuegosAventurasJunglaComponent,
              },
              {
                path: 'mario-car',
                component: RutaProductosVideojuegosAventurasMarioCarComponent,
              },
              {
                path: 'tarzan',
                component: RutaProductosVideojuegosAventurasTarzanComponent,
              },
            ],
          },
          {
            path: 'combate',
            component: RutaProductosVideojuegosCombateComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'no-encontrada',
    component: RutaNoEncontradaComponent,
  },

  { path: '', redirectTo: '/home/app', pathMatch: 'full' }, //esta ruta ba al final de todas
  { path: '**', component: RutaNoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
