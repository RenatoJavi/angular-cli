import { Component, OnInit } from '@angular/core';
import { AdministrarGruposService } from '../ruta-administrar-grupos/servicios/administrar-grupos.service';
import { Router } from '@angular/router';
import { AutorizarNombreService } from 'src/app/autorizar/autorizar-nombre.service';

@Component({
  selector: 'app-ruta-revisar-compras',
  templateUrl: './ruta-revisar-compras.component.html',
  styleUrls: ['./ruta-revisar-compras.component.css']
})
export class RutaRevisarComprasComponent implements OnInit {

  facturas =[];
  constructor(private readonly _AdminGruposService: AdministrarGruposService,
    private readonly _router: Router,
    private readonly _autorizarNombre: AutorizarNombreService
    ) { }

  buscar(texto) {
    const busq: string= "";
    texto = busq;
    console.log(texto);
    this.facturas = this._AdminGruposService.busquedaFactura(texto);
  }

  redirigir(){
    const url = ['/menu',];
    const parametros = {
      queryParams: {
        nombre: this._autorizarNombre.nombre
      }
    };

    this._router.navigate(url, parametros);
  }

  ngOnInit() {
    this.facturas = this._AdminGruposService.enviarFacturas();
  }

}
