import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCarritoCompras } from '../../ruta-comprar/interfaces/item-carrito-compras';

@Injectable({
  providedIn: 'root'
})
export class AdministrarGruposService {
  constructor(private readonly _router: Router) {}

  listaEstudiantes: Estudiante[] = [
    {
      id: 1,
      nombres: 'Javier',
      apellidos: 'Salazar',
      fechaNacimiento: '1992-02-10',
      semestreActual: 8,
      graduado: false
    },
    {
      id: 2,
      nombres: 'Carlos',
      apellidos: 'Gutierrez',
      fechaNacimiento: '2010-10-16',
      semestreActual: 1,
      graduado: false
    },
    {
      id: 3,
      nombres: 'Cesar',
      apellidos: 'Pillajo',
      fechaNacimiento: '1989-07-09',
      semestreActual: 10,
      graduado: true
    }
  ];

  listaMaterias: Materia[] = [
    {
      nombre: 'Web',
      precio: 100,
      codigo: 1,
      descripcion: 'piso de 7mo',
      activo: true,
      fechaCreacion: '2003-11-11',
      numeroHorasPorSemana: 4,
      estudianteid: [1, 2]
    },
    {
      nombre: 'Legislacion',
      precio: 80,
      codigo: 2,
      descripcion: 'pioso de 4to',
      activo: true,
      fechaCreacion: '2009-02-23',
      numeroHorasPorSemana: 8,
      estudianteid: [2, 2]
    }
  ];

  listaFacturas: ItemCarritoCompras[] = [];

  enviarEstudiantes() {
    console.log(this.listaEstudiantes);
    return this.listaEstudiantes;
  }

  busqueda(key: string) {
    const busqueda = this.listaEstudiantes.filter(n => n.nombres.includes(key));
    console.log(busqueda);
    return busqueda;
  }

  buscarIndex(id: number) {
    const elemento = this.listaEstudiantes.findIndex(n => n.id === id);
    console.log(elemento);
    return elemento;
  }

  eliminar(id: number) {
    const index = this.buscarIndex(id);
    this.listaEstudiantes.splice(index, 1);
    return this.listaEstudiantes;
  }

  asignarIndice(lista) {
    let max = 1;
    lista.forEach((actual, indice, arreglo) => {
      if (actual.id > max) {
        max = actual.id;
      }
    });
    console.log(max);
    return max;
  }
  insertar(nombre, apellido, fecha, semestre, graduado) {
    const indice = this.asignarIndice(this.listaEstudiantes) + 1;
    const nuevo: Estudiante = {
      id: indice,
      nombres: nombre,
      apellidos: apellido,
      fechaNacimiento: fecha,
      semestreActual: semestre,
      graduado: graduado
    };
    this.listaEstudiantes.push(nuevo);
  }

  redirigir(url) {
    this._router.navigate(url);
  }

  //
  enviarMaterias() {
    console.log('materias: ', this.listaMaterias);
    return this.listaMaterias;
  }

  enviarMateriasPorEstudiante(idEstudiante: number) {
    const busqueda = this.listaMaterias.filter(n => n.codigo === idEstudiante);
    console.log(busqueda);
    return busqueda;
  }

  busquedaMateria(key: string) {
    const busqueda = this.listaMaterias.filter(n => n.nombre.includes(key));
    console.log(busqueda);
    return busqueda;
  }

  buscarIndexMateria(id: number) {
    const index = this.listaMaterias.findIndex(n => n.codigo === id);
    return index;
  }

  eliminarMateria(id: number) {
    const index = this.buscarIndex(id);
    this.listaMaterias.splice(index, 1);
    return this.listaMaterias;
  }

  insertarMateria(
    nombre,
    precio,
    descripcion,
    activo,
    fechaCreacion,
    numeroHorasPorSemana,
    estudianteid
  ) {
    const indice = this.asignarIndice(this.listaMaterias) + 1;

    const nueva = {
      nombre: nombre,
      precio: precio,
      codigo: indice, //id materia
      descripcion: descripcion,
      activo: activo,
      fechaCreacion: fechaCreacion,
      numeroHorasPorSemana: numeroHorasPorSemana,
      estudianteid: estudianteid
    };
    this.listaMaterias.push(nueva);
    return this.listaMaterias;
  }

  insertarFactura(factura: ItemCarritoCompras) {
    console.log(factura);
    this.listaFacturas.push(factura);
  }
  enviarFacturas() {
    return this.listaFacturas;
  }

  busquedaFactura(key: string) {
    const busqueda = this.listaFacturas.filter(
      n => n.nombreCajero.includes(key) || n.nombre.includes(key)
    );
    console.log(busqueda);
    return busqueda;
  }
}

export interface Estudiante {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  semestreActual: number;
  graduado: boolean;
}

export interface Materia {
  nombre: string;
  precio: number;
  codigo: number; //id materia
  descripcion: string;
  activo: boolean;
  fechaCreacion: string;
  numeroHorasPorSemana: number;
  estudianteid: Estudiante['id'][];
}
