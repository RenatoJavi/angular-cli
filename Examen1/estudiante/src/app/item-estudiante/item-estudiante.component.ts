import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-item-estudiante', //--> nombre de  mi etiqueta
  templateUrl: './item-estudiante.component.html'titul,
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

  constructor() {}

  ngOnInit() {
    console.log('empezo');
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
