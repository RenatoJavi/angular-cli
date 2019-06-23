import { Component, OnInit } from '@angular/core';
import { AdministrarGruposService } from './servicios/administrar-grupos.service';
import { stringify } from '@angular/core/src/util';
import { text } from '@angular/core/src/render3';
import { AutorizarNombreService } from 'src/app/autorizar/autorizar-nombre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-administrar-grupos',
  templateUrl: './ruta-administrar-grupos.component.html',
  styleUrls: ['./ruta-administrar-grupos.component.css']
})
export class RutaAdministrarGruposComponent implements OnInit {

  constructor(private readonly _AdminGruposService: AdministrarGruposService,
    private readonly _autorizarNombre: AutorizarNombreService,
    private readonly _router: Router
    ) { }
  busqueda: string;
  estudiantes =[];

  buscar(texto) {
    const busq: string= "";
    texto = busq;
    console.log(texto);
    this.estudiantes = this._AdminGruposService.busqueda(texto);

  }

  eliminar(id){
    this.estudiantes = this._AdminGruposService.eliminar(id);
  }

  redirigir(id){
    const ruta = ['/menu','revisar-grupos','producto',id];
    this._AdminGruposService.redirigir(ruta);
  }
  volver(){
    const url = ['/menu',];
    const parametros = {
      queryParams: {
        nombre: this._autorizarNombre.nombre
      }
    };

    this._router.navigate(url, parametros);
  }


  ngOnInit() {
    this.estudiantes = this._AdminGruposService.enviarEstudiantes();
    console.log(this.estudiantes)


  }

}
