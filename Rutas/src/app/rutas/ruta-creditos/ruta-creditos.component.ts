import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css'],
})
export class RutaCreditosComponent implements OnInit {
  constructor(private readonly _activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {}
}
