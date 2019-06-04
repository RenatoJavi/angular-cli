import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemEstudianteComponent } from './item-estudiante/item-estudiante.component';
import { CarritoService } from './servicios/carrito.service';
import { MostrarListaComponent } from './mostrar-lista/mostrar-lista.component';

@NgModule({
  declarations: [
    //componentes
    AppComponent,
    ItemEstudianteComponent,
    MostrarListaComponent
  ],
  imports: [
    //otros modulos
    BrowserModule, //comparte una Directiva ngfor
    AppRoutingModule
  ],
  providers: [
    //servicios
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
