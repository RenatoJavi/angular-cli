import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-mostrar-materias',
  templateUrl: './mostrar-materias.component.html',
  styleUrls: ['./mostrar-materias.component.css']
})
export class MostrarMateriasComponent implements OnInit {
  //accedo al servicio , miro que tiene el carrito service
  constructor(private readonly _carritoService: CarritoService) {}

  ngOnInit() {}
}
