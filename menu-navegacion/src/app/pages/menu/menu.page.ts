import { Component, OnInit } from '@angular/core';
import { MenuListPageModule } from '../menu-list/menu-list.module';
import { MenuListPage } from '../menu-list/menu-list.page';
import { ContenidoPage } from '../contenido/contenido.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  rootPage = MenuListPage;
  rootContenido = ContenidoPage;
  constructor() {}

  ngOnInit() {}
}
