import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';
import { ProductoCarritoCompras } from 'src/app/interfaces/producto-carrito-compras';

@Injectable()
export class CarritoService {

    carritoCompras =[];

    /* agregarCarritoDeCompras(itemCarrito: ItemCarritoCompras): ItemCarritoCompras[]{
        const identificador = itemCarrito.valor;
        let indiceItem = -1;
        const existeElItem = this.carritoCompras
            .some(
                (item:ItemCarritoCompras, indice)=>{
                    if(item.valor == identificador){
                        indiceItem = indice;
                        return true;
                    }else{
                        return false;
                    }
                }
            )
        if(existeElItem){
            this.anadirAlContador(indiceItem);
        }else{
            this.anadirAlCarrito(itemCarrito);
        }
        console.log('Se anadio al carrito', itemCarrito);
        return this.carritoCompras;

    } */

    agregarCarritoDeCompras(itemCarrito: ItemCarritoCompras): ItemCarritoCompras[]{
        const idTienda = itemCarrito.nombreTienda;
        const identificador = itemCarrito.productos[0].valor
        let indiceTienda = -1;
        let indiceItem = -1;

        const existeTienda = this.carritoCompras
        .some(
            (item: ItemCarritoCompras, indice)=> {
                if(item.nombreTienda == idTienda){
                    indiceTienda = indice;
                    return true;
                } else{
                    return false;
                }
            }
        )

        if(!existeTienda){
            this.anadirAlCarrito(itemCarrito)
            console.log(indiceTienda,  indiceItem);
        }else{

            const existeElItem = this.carritoCompras[indiceTienda].productos
            .some((item:ProductoCarritoCompras, indice)=>{
                if(item.valor == identificador){
                    indiceItem = indice;
                    return true;
                }else{
                    return false;
                }
            })


        if(existeElItem){
            this.anadirAlContador(indiceTienda, indiceItem);
            console.log(indiceTienda,  indiceItem);
        }else{
            this.anadirAProductos(itemCarrito, indiceTienda);
            console.log(indiceTienda,  indiceItem);
        }
        }

        
        console.log('Se anadio al carrito', itemCarrito);
        return this.carritoCompras;

    }

    private anadirAlContador(indiceTienda:number, indiceItem: number){
        this.carritoCompras[indiceTienda].productos[indiceItem].cantidad++;
    }

    private anadirAlCarrito(item:ItemCarritoCompras){
        item.productos[0].cantidad = 1;
        console.log(item.productos[0].cantidad);
        this.carritoCompras.splice(0,0,item);
    }

    private anadirAProductos(item:ItemCarritoCompras, indiceTienda: number){
        item.productos[0].cantidad = 1;
        this.carritoCompras[indiceTienda].productos.splice(0,0, item.productos[0]);
        
    }

    
}


/*
const respuesta = [1, 2, 3, 4].forEach(  // undefined
    (valor:number) => {
        console.log('Valor:',valor);
        if(valor==1){
            console.log('Te encontre 1 !!');
        }
    });
console.log(respuesta); // undefined -> void
const respuestaFind = [1, 2, 3, 4].find(  // valor
    (valor:number):boolean => {
        return valor == 3  // Expresion!  a < b  b == c
    });
console.log(respuestaFind); // valor
const respuestaSome = [1, 2, 3, 4].some(  // boolean
    (valor:number):boolean => {
        return valor == 5  // Hay algun 3? OR
    });
console.log(respuestaSome); // boolean
const respuestaEvery = [1, 2, 3, 4].every(  // boolean
    (valor:number):boolean => {
        return valor > 0  // TODOS SON MAYOT Q 0? AND
    });
console.log(respuestaEvery); // boolean<
*/


/*
function busqueda(valor, indice, arreglo){
    console.log('Valor:',valor);
    if(valor==1){
        console.log('Te encontre 1 !!');
    }
}
*/