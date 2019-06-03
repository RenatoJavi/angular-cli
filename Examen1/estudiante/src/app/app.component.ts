import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Lista estudiante';
  arregloDeMateria = [];
}

class materia {
  nombre: int;
  codigo: string;
  descripcion: strig;
  activo: bool;
  fechaCreacion: string;
  numerosHorasPorSemana: int;
  estudianteId: int;
  constructor(
    nombre: int,
    codigo: string,
    descripcion: strig,
    activo: bool,
    fechaCreacion: string,
    numerosHorasPorSemana: int,
    estudianteId: int
  ) {
    this.nombre = nombre;
  }
}
