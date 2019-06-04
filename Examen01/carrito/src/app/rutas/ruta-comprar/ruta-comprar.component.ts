import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from './servicios/carrito-compras.service';
import { ProductoCarritoCompras } from './interfaces/producto-carrito-compras';
import { AutorizarNombreService } from 'src/app/autorizar/autorizar-nombre.service';
import { AdministrarGruposService } from '../ruta-administrar-grupos/servicios/administrar-grupos.service';
import { ItemCarritoCompras } from './interfaces/item-carrito-compras';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ruta-comprar',
  templateUrl: './ruta-comprar.component.html',
  styleUrls: ['./ruta-comprar.component.css']
})
export class RutaComprarComponent implements OnInit {

  constructor(private readonly _carritoService: CarritoComprasService,
    private readonly _autorizarNombre: AutorizarNombreService,
    private readonly _adminGruposService: AdministrarGruposService,
    private readonly _router: Router
    ) { }


  productos = [];
  nombre: string= "";
  id: string = "";
  direccion: string= "";
  telefono: string = "";
  correo: string = "";

  cajero = "";
  total = 0;
  carrito: ItemCarritoCompras ={
    nombreCajero: this.cajero,
      productos: []
  };

  agregar(item){
    console.log(item.estudiante)
    const aux: string = item.estudiante + '-' + item.materia;

    const producto: ProductoCarritoCompras = {
      valor1: item.estudiante,
      valor2: item.materia
    }
    
    const respuestaCarrito = this._carritoService.agregarCarrito(producto, 1);
    this.carrito = respuestaCarrito;
    console.log(respuestaCarrito)
    this.total = this.total + Number(item.cantidad);
    console.log(this.carrito['productos'])
  }

  quitar(item){
    console.log('este', item.valor2)
    this.total = this.total - this._carritoService.devolverValor(item) 
    const respuestaCarrito = this._carritoService.agregarCarrito(item, 0);
    this.carrito = respuestaCarrito;
    
  }

  guardarFactura(formulario){

    this.carrito.nombre = this.nombre;
    this.carrito.correo= this.correo;
    this.carrito.id = this.id;
    this.carrito.direccion = this.direccion;
    this.carrito.telefono = this.telefono;
    this.carrito.nombreCajero = this.cajero;
    this.carrito.total = this.total;

    this._adminGruposService.insertarFactura(this.carrito);
    const url = ['/menu',];
    const parametros = {
      queryParams: {
        nombre: this.cajero
      }
    };

    this._router.navigate(url, parametros);
    
    // this._adminGruposService.insertar(this.nombre, this.apellido, this.fechaNacimiento, this.semestreActual, this.graduado)

    // console.log('formulario1:', this.nombre);
    // const url = ['/menu','revisar-grupos'];
    // this._router.navigate(url);

    

  }

  redirigir(){
    const url = ['/menu',];
    const parametros = {
      queryParams: {
        nombre: this.cajero
      }
    };

    this._router.navigate(url, parametros);
  }

  ngOnInit() {
    this.productos = this._carritoService.enviarMaterias();
    const guardoNombre = this._autorizarNombre.guardoNombre;
    this.cajero = this._autorizarNombre.nombre;

    const crear = this._carritoService.crearCarrito(this.carrito);
    this.carrito = crear;
  }

}
