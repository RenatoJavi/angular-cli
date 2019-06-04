import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito.service';

@Component({
  selector: 'app-root', //componete padre
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Lista estudiante';
  estasMostrando = true;
  aulas = [
    {
      etiqueta: 'Aula1',
      piso: 'uno'
    },
    {
      etiqueta: 'Aula2',
      piso: 'dos'
    },
    {
      etiqueta: 'Aula3',
      piso: 'tres'
    }
  ];

  peliculas = [
    {
      titulo: 'TIENDA DE LIBROS',
      pelicula: 'Batman v. Superman',
      director: 'Zack Snider',
      anio: '2016',
      duracion: '1'
    },
    {
      titulo: 'TIENDA DE GORRAS',
      pelicula: 'La verdad duele',
      director: 'Will Smith',
      anio: '2015',
      duracion: '2'
    },
    {
      titulo: 'tienda de Golocinas',
      pelicula: 'Una historia real',
      director: 'Desconocido',
      anio: '2014',
      duracion: '3'
    }
  ];

  materias = [
    {
      materiaNombre: 'Web',
      codigo: '801',
      descripcion: 'aplicado a la web',
      activo: true,
      fechaCreacion: '2000',
      numerosHorasPorSemana: '4',
      estudianteId: 101
    },
    {
      materiaNombre: 'Auditoría',
      codigo: 802,
      descripcion: 'CMMI',
      activo: true,
      fechaCreacion: 2012,
      numerosHorasPorSemana: 4,
      estudianteId: 102
    },
    {
      materiaNombre: 'Gestion de TIC',
      codigo: 803,
      descripcion: 'COBIT',
      activo: false,
      fechaCreacion: 2000,
      numerosHorasPorSemana: 4,
      estudianteId: 103
    }
  ];

  constructor(public readonly carritoService: CarritoService) {}
}

// class Flor {
//   constructor(
//     public nombre: any,
//     public codigo: string // public descripcion: string, // public activo: boolean, // public fechaCreacion: string, // public numerosHorasPorSemana: any, // public estudianteId: any
//   ) {}
// }
