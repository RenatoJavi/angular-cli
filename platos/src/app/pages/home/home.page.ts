import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavController } from '@ionic/angular';

import { Promotion } from '../../shared/promotion';
import { PromocionService } from '../../services/promocion.service';

import { DishParametros } from '../../shared/dish';
import { PlatoService } from '../../services/plato.service';

import { Leader } from '../../shared/lider';
import { LeaderService } from '../../services/leader.service';
import { error } from 'protractor';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  home: string;
  platos: DishParametros;
  leader: Leader;
  promocion: Promotion;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;

  constructor(
    public _activeRoute: ActivatedRoute,
    public nav: NavController,
    private platoService: PlatoService,
    private procionService: PromocionService,
    private leaderService: LeaderService
  ) // @Inject('baseUrl') private baseUrl: string
  {}
  @Inject('baseUrl') baseUrl: string;
  ngOnInit() {
    this.home = this._activeRoute.snapshot.paramMap.get('id');
    this.platoService.getFeaturedDish().subscribe(
      (disch) => (this.platos = disch),
      (errmess) => (this.dishErrMess = <any>errmess)
    );

    this.leaderService.getFeaturedLeader().subscribe(
      (leader) => (this.leader = leader),
      (errmess) => (this.dishErrMess = <any>errmess)
    );
    this.procionService.getFeaturedPromotion().subscribe(
      (promotion) => (this.promocion = promotion),
      (errmess) => (this.dishErrMess = <any>errmess)
    );
  }
}
