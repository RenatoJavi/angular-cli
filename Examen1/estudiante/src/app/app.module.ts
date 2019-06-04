import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemEstudianteComponent } from './item-estudiante/item-estudiante.component';

@NgModule({
  declarations: [
    //componentes
    AppComponent,
    ItemEstudianteComponent
  ],
  imports: [
    //otros modulos
    BrowserModule, //comparte una Directiva ngfor
    AppRoutingModule
  ],
  providers: [
    //servicios
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
