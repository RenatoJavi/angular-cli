import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },

  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/menu/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },

  {
    path: 'menu-list',
    loadChildren: () =>
      import('./pages/menu-list/menu-list.module').then(
        (m) => m.MenuListPageModule
      ),
  },
  {
    path: 'contenido',
    loadChildren: () =>
      import('./pages/contenido/contenido.module').then(
        (m) => m.ContenidoPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
