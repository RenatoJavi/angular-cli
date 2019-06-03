import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-estudiante', //--> nombre de  mi etiqueta
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {
  title = 'grupos';

  @Input()
  nombreItem;

  constructor() {}

  ngOnInit() {}

  hacerClick() {
    alert('hello Niko!' + this.nombreItem);
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
