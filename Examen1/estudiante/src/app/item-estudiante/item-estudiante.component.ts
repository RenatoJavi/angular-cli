import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-item-estudiante', //--> nombre de  mi etiqueta
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit, OnDestroy {
  title = 'grupos';

  @Input()
  titulo;

  @Input()
  nombreItem;

  @Output()
  cambioClase: EventEmitter<boolean>;

  url = 'https://mascotaspara.com/wp-content/uploads/2017/04/BOXER-1.jpg';

  notas = [1, 2, 3, 4, 5, 6];
  //nos va ayudar a la Dependency Inyection , EL SERVICIO ES UN TIPO de Dependencia

  //servicios compartidos
  //servicios se inyecta en-->Componentes
  //servicio se inyecta en-->componentes
  //serviciosse inyecta en -->SERVICIOS
  // es un Alias _tiendaService, CON LOS : sabe que servicio inyectar, importa este sevicio
  constructor(private readonly _carritoService: CarritoService) {}

  ngOnInit() {
    console.log('empezo');
    console.log(this._carritoService.carritoCompras);
  }
  ngOnDestroy() {
    console.log('termino');
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
  agregarCarrito(valorCarrito: number) {
    //this._carritoService.carritoCompras.push(valorCarrito);
    this._carritoService.carritoCompras.splice(0, 0, valorCarrito);
    console.log(this._carritoService.carritoCompras);
  }
  quitarCarrito(valorCarrito: number) {
    //this._carritoService.carritoCompras.push(valorCarrito);
    this._carritoService.carritoCompras.slice(0, 0);
    console.log(this._carritoService.carritoCompras);
  }

  hacerClick() {
    alert('hello Niko!' + this.nombreItem);
  }
  alertarBlur() {
    alert('ALERTAR BLUR!');
  }
}

//@Decorators()
// class usuario{

//   private nombre = 'Nikolas';

//   constructor (nombre){

//   }

//   public metodoPublico(){}

//   private metodoPrivado(){}

//   protected metodoProtegido(){}

// }
