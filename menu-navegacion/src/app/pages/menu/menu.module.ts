import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Routes, RouterModule } from '@angular/router';
import { MenuListPage } from '../menu-list/menu-list.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'details/:level',
        loadChildren: () =>
          import('../contenido/contenido.module').then(
            (m) => m.ContenidoPageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/menu/details/0',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    // RouterModule.forChild(routes),
  ],
  declarations: [MenuPage],
})
export class MenuPageModule {}
