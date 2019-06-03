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
  url = 'https://mascotaspara.com/wp-content/uploads/2017/04/BOXER-1.jpg';

  notas = [1, 2, 3, 4, 5, 6];

  constructor() {}

  ngOnInit() {}

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
