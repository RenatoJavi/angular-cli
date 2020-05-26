import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeadComponent } from './componentes/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
