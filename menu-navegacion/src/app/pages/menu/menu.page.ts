import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuListPageModule } from '../menu-list/menu-list.module';
import { MenuListPage } from '../menu-list/menu-list.page';
import { ContenidoPage } from '../contenido/contenido.page';
import { NavController } from '@ionic/angular';
import { MenuListPageRoutingModule } from '../menu-list/menu-list-routing.module';
import { url } from 'inspector';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  rootPage = MenuListPage;
  rootContenido = ContenidoPage;
  constructor(public navCtrl: NavController) {}
  goToNextPage() {
    //  this.navCtrl.navigateForward();
  }

  ngOnInit() {}
}
