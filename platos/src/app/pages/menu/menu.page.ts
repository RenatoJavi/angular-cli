import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menu: string;

  //id = null;

  constructor(private _activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.menu = this._activeRoute.snapshot.paramMap.get('id');
  }
}
