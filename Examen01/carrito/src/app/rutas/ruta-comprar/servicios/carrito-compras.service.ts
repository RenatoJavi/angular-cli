import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../interfaces/item-carrito-compras';
import { ProductoCarritoCompras } from '../interfaces/producto-carrito-compras';
import { AdministrarGruposService } from '../../ruta-administrar-grupos/servicios/administrar-grupos.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  
  carrito: ItemCarritoCompras;
  constructor( private readonly _adminGruposService: AdministrarGruposService) { }
  arregloProductos = this._adminGruposService.listaMaterias;

  crearCarrito(item: ItemCarritoCompras){
    this.carrito = item;
    return this.carrito
  }

  enviarMaterias(){
    const lista = [];
    this.arregloProductos.forEach(
      (actual, indice, arreglo) =>{
        const id = actual.estudianteid[0]
        const idnombre = this._adminGruposService.buscarIndex(id);
        const valor ={ estudiante: this._adminGruposService.listaEstudiantes[idnombre].nombres, materia: actual.nombre, cantidad: actual.precio};
        lista.push(valor);
      }
      );
      return lista;
  }


//suma 1, resta 0
  agregarCarrito(itemCarrito: ProductoCarritoCompras, operacion:number): ItemCarritoCompras{
    const nombreProducto = itemCarrito.valor1;
    let indiceProducto = -1;
    const existeItem = this.carrito.productos
    .some((item: ProductoCarritoCompras, indice) => {
      if(item.valor1 == nombreProducto){
        indiceProducto = indice;
        return true;
      } else {
        return false;
      }
    });

    if(existeItem){
      this.aniadirContador(indiceProducto, operacion);    
    } else{
      this.aniadirAProductos(itemCarrito);
    }

    console.log('Se anadio al carrito', itemCarrito);
    return this.carrito;

  }
  devolverValor(itemCarrito: ProductoCarritoCompras){
    let valor = 0;
    this.arregloProductos.forEach(
      (actual, indice, arreglo) =>{
        const id = actual.estudianteid[0];
        const idnombre = this._adminGruposService.buscarIndex(id);
        if(actual.nombre === itemCarrito.valor2){
          valor = actual.precio;
        }
        
        
      }
      );
      return valor;
  }

  //suma 1, resta 0
  aniadirContador(indiceProducto: number, operacion: number){
    if(operacion === 1){
      this.carrito.productos[indiceProducto].cantidad++;
    }else if(operacion === 0){
      this.carrito.productos[indiceProducto].cantidad--;
    }
  };

  aniadirAProductos(item: ProductoCarritoCompras){
    item.cantidad = 1;
    this.carrito.productos.splice(0,0, item);
  }
}
