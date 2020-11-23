import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contact: string;

  constructor(public _activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.contact = this._activeRoute.snapshot.paramMap.get('id');
  }
}
