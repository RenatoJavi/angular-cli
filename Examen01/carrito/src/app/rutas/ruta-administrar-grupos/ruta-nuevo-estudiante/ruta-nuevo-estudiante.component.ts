import { Component, OnInit } from '@angular/core';
import { AdministrarGruposService } from '../servicios/administrar-grupos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-nuevo-estudiante',
  templateUrl: './ruta-nuevo-estudiante.component.html',
  styleUrls: ['./ruta-nuevo-estudiante.component.css']
})
export class RutaNuevoEstudianteComponent implements OnInit {

  constructor(private readonly _adminGruposService: AdministrarGruposService,
              private readonly _router: Router
    ) { }
  nombre: string = "";
  apellido: string = "";
  fechaNacimiento = "";
  semestreActual: number;
  graduado: boolean;


  guardarUsuario(formulario){
    this.nombre = formulario.controls.nombre.value;
    this._adminGruposService.insertar(this.nombre, this.apellido, this.fechaNacimiento, this.semestreActual, this.graduado)

    console.log('formulario1:', this.nombre);
    const url = ['/menu','revisar-grupos'];
    this._router.navigate(url);
    

  }

  ngOnInit() {
  }

}
