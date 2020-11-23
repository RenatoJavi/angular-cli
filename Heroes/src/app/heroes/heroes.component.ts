import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HEROES } from '../mock heroes-server/mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //heroes = HEROES; // Replace the definition of the heroes property with a simple declaration.
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes(); //llamo la metodo getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  //creo un metodo para recuperar los HEROES DEL servicio
  //  getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  //  }
  //creo un metodo para recuperar los HEROES DEL servicio, usando observable para que sea asyncrono
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
