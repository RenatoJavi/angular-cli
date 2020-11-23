import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { ContactPage } from './pages/contact/contact.page';
import { MenuPage } from './pages/menu/menu.page';
import { PlatoService } from './services/plato.service';
import { ProcesoHttpService } from './services/proceso-http.service';
import { LeaderService } from './services/leader.service';
import { PromocionService } from './services/promocion.service';

import { baseURL } from './shared/baseUrl';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AboutPage, ContactPage, HomePage, MenuPage],
  entryComponents: [AboutPage, ContactPage, HomePage, MenuPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    PlatoService,
    ProcesoHttpService,
    LeaderService,
    PromocionService,

    { provide: 'baseUrl', useValue: baseURL },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
