import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  home: string;

  constructor(public _activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.home = this._activeRoute.snapshot.paramMap.get('id');
  }
}
