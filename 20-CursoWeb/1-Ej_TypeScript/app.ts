import { noop } from 'rxjs';
export {};
let nombre: string = 'Javi, todo va bien';

let edad: number = 32;

//let texto = 'hola' + '  ' + nombre + '  ' + edad + '';
let texto = `Hola, ${nombre}`;
//console.log(texto);
function getProducto() {
  return 'alternador Honda';
}

let repuesto: string = `${getProducto()}`;

console.log(repuesto);

function activar(quien: string, msmOpcional?: string) {
  console.log(`${quien}` + '  ' + 'activo la alarma' + '  ' + msmOpcional);
}

activar('El comisionado Gordon', 'a media noche');

console.log('* * * * * Nueva linea * * * *');

let miFuncion = function (a: string) {
  return a;
};

let mifLECHA = (a) => {
  return a;
};

let miFuncion2 = function (a: number, b: number) {
  return a + b;
};
console.log(miFuncion2(7, 7));

let flecha2 = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(flecha2(3, 9));

let miFuncion3 = function (nombre: string) {
  nombre = nombre.toUpperCase();
  return nombre;
};
console.log(miFuncion3('Proyecto de enprender'));

let flecha3 = (nombre: string) => {
  nombre = nombre.toUpperCase();
  return nombre;
};
console.log(flecha3('Proyecto de enprender'));

console.log('- - -  Pero para  que sirve la funcion de Flecha ? - - - ');
let hulk = {
  //=>objeto
  nombre: 'Holk',
  smash() {
    console.log(this.nombre + 'aplasta');
  },
};
hulk.smash();

let auto = {
  fabricante: 'BMW',
  velocidad() {
    console.log(this.fabricante + 'mejor auto del momento');
  },
};
auto.velocidad();
