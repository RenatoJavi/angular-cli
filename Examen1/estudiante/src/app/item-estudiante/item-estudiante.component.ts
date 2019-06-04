import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { TiendaService } from '../tienda/tienda.service';

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
  //servicio-->componentes
  //servicios-->SERVICIOS
  // es un alias _tiendaService
  constructor(private readonly _tiendaService: TiendaService) {}

  ngOnInit() {
    console.log('empezo');
    console.log(this._tiendaService.tiendaCompras);
  }
  ngOnDestroy() {
    console.log('termino');
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
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
