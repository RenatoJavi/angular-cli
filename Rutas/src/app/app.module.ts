import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaCreditosComponent,
    RutaProductosComponent,
    RutaNoEncontradaComponent,
    RutaProductosHogarComponent,
    RutaProductosVideojuegosComponent,
    RutaCreditoPersonalComponent,
    RutaCreditoTarjetaComponent,
    RutaProductosVideojuegosAventurasComponent,
    RutaProductosVideojuegosCombateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
