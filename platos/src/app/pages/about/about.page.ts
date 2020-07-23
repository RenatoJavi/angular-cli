import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  about: string;

  constructor(public _activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.about = this._activeRoute.snapshot.paramMap.get('id');
  }
}
