import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { AboutComponent } from './componentes/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//imports: [RouterModule.forRoot(routes, { useHash: true })],
// exports: [RouterModule],
