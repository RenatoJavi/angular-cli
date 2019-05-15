import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  color = 'rojo';
  estaMostrando = false;

  arregloFlores =[
    new Flor("Rosa", "Azul"),
    new Flor("Dalias", "blancas"),
    new Flor("Margaritas", "Amarillas")
  ];

  arregloFloresJs = [
    {
      titulo: "Don J",
      nombre: "Rosa",
      descripcion: "azul",
      notas: [
        'Hot dog',
        'Hamburguesas',
        'Papitas'
      ]
    },
    {
      titulo: "Don Pepe",
      nombre: "Dalias",
      descripcion: "Blancas",
      notas: [
        'Papitas',
        'empanadas'
      ]
    },
    {
      titulo: "Doña Maria",
      nombre: "Margaritas",
      descripcion: "Semiblancas",
      notas: [
        'motes',
        'fritada',
        'Papitas'
      ]
    }
  ]

  constructor(private readonly _carritoService: CarritoService){

  }

  cambioFeliz(evento:boolean){
    //logica para hacerle verde
    console.log("Feliz");
    this.color = "verde";
    
  }

  cambioEnojado(evento:boolean){
    //logica para hacerlo amarillo
    console.log("Enojado")
    this.color = "amarillo"

  }

  mostrar(estaMostrando){
    this.estaMostrando = estaMostrando;
  }
}


// class Flor{
//   nombre: string;
//   descripcion: string;

//   constructor(nombre:string, descripcion:string){
//     this.nombre= nombre;
//   }
// }

class Flor{
  
  constructor(
    public nombre:string, //sin public no es un atributo de la clase
    public descripcion:string){
    
  }
}