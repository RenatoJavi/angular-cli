import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
})
export class CuerpoComponent implements OnInit {
  mostrar = true;

  frase: tipadoFrase = {
    mensaje: 'accion y raccion',
    autor: 'Albert',
  };

  personajes: string[] = [
    'llanta',
    'aceite',
    'radios',
    'bujias',
    'ruliman',
    'batería',
  ];

  constructor() {}

  ngOnInit(): void {}
}
interface tipadoFrase {
  mensaje: string;
  autor: string;
}
