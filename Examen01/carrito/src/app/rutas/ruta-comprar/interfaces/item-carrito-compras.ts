import { ProductoCarritoCompras } from './producto-carrito-compras';


export interface ItemCarritoCompras {
    nombreCajero?:string;
    nombre?: string;
    id?: string;
    direccion?: string;
    telefono?: string;
    correo?: string;
    total?: number;
    productos: ProductoCarritoCompras[];
}