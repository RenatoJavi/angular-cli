import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { NostrarCarritoComponent } from './nostrar-carrito/nostrar-carrito.component';

@NgModule({
  declarations: [  // se listan los Componentes
    AppComponent,
    ItemGaleriaComponent,
    NostrarCarritoComponent
  ],
  imports: [  //Otros modulos
    BrowserModule
  ],
  providers: [
    CarritoService,
    
  ],  //Servicios
  bootstrap: [
    AppComponent
  ] //Se define el componente principal
})
export class AppModule { }
