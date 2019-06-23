import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import {FormsModule} from '@angular/forms';
import { RutaAdministrarGruposComponent } from './rutas/ruta-administrar-grupos/ruta-administrar-grupos.component';
import { RutaRevisarComprasComponent } from './rutas/ruta-revisar-compras/ruta-revisar-compras.component';
import { RutaComprarComponent } from './rutas/ruta-comprar/ruta-comprar.component';
import { AdministrarGruposService } from './rutas/ruta-administrar-grupos/servicios/administrar-grupos.service';
import { RutaNuevoEstudianteComponent } from './rutas/ruta-administrar-grupos/ruta-nuevo-estudiante/ruta-nuevo-estudiante.component';
import { RutaGestionProductosComponent } from './rutas/ruta-administrar-grupos/ruta-gestion-productos/ruta-gestion-productos.component';
import { RutaNuevoProductoComponent } from './rutas/ruta-administrar-grupos/ruta-gestion-productos/ruta-nuevo-producto/ruta-nuevo-producto.component';
import { CarritoComprasService } from './rutas/ruta-comprar/servicios/carrito-compras.service';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaMenuComponent,
    RutaNoEncontradaComponent,
    RutaAdministrarGruposComponent,
    RutaRevisarComprasComponent,
    RutaComprarComponent,
    RutaNuevoEstudianteComponent,
    RutaGestionProductosComponent,
    RutaNuevoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AdministrarGruposService,
    CarritoComprasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
