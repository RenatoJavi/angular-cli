import { Component, OnInit } from '@angular/core';
import { AutorizarNombreService } from 'src/app/autorizar/autorizar-nombre.service';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {
  constructor(private readonly _autorizarService: AutorizarNombreService) {}
  nombre: string;
  items = [1, 2, 3, 4];

  ingresar(cajero) {
    this.nombre = cajero;
    console.log('guardar nombre :');
    this._autorizarService.login(this.nombre);
  }

  logout() {
    this._autorizarService.logout();
  }

  ngOnInit() {}
}
