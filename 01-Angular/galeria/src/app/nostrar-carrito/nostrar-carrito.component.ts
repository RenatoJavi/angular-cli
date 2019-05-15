import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';

@Component({
  selector: 'app-nostrar-carrito',
  templateUrl: './nostrar-carrito.component.html',
  styleUrls: ['./nostrar-carrito.component.css']
})
export class NostrarCarritoComponent implements OnInit {

  constructor(private readonly _carritoService: CarritoService) { }

  ngOnInit() {
  }

}
