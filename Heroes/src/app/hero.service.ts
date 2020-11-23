import { Injectable } from '@angular/core';
import { Hero } from './interface/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HEROES } from './mock heroes-server/mock-heroes';
@Injectable({
  //acetpa metadatos,
  providedIn: 'root',
})
export class HeroService {
  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES); //retorna los datos del optenidos del servidor
  // }

  getHeroes(): Observable<Hero[]> {
    this.messageService.agregar('HeroService: fetched heroes');
    return of(HEROES);
  }
  constructor(private messageService: MessageService) {}
}
