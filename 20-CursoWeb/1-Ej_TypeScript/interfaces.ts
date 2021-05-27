import { Leader } from '../../platos/src/app/shared/lider';
function enviarMision(xmen: Xmen) {
  console.log('Name : ', xmen.nombre);
  console.log('Power : ', xmen.poder);
}

let wolverin: Xmen = {
  nombre: 'lOGAN',
  poder: 'titanio',
};

interface Xmen {
  nombre: string;
  poder: string;
}

//llamar a la funcion
enviarMision(wolverin);

function llantas(todoTerreno: ruedaMoto) {
  console.log('llanta de tipo: ', todoTerreno.tipo);
  console.log('ring de la llanta : ', todoTerreno.ring);
}
let codigoLlanta = {
  tipo: 'todo terreno',
  ring: 18,
};

interface ruedaMoto {
  tipo: string;
  ring: number;
}
llantas(codigoLlanta);
//****** BICICLETA*******
function bicicleta(caracteristica: tipadoBici) {
  console.log('Caracteristicas generales: ', caracteristica);
  console.log('Color : ', caracteristica.colorBici);
}

let objBicicleta = {
  nombre: 'kawasaky',
  tamanio: 27.5,
  componentes: 'shimano',
  colorBici: 'yellow',
};

interface tipadoBici {
  nombre: string;
  tamanio: number;
  componentes: string;
  colorBici: string;
}

//llamado a la funcion
bicicleta(objBicicleta);
// * * * reparaciones * * *
function taller(compuDetalle: detalleEquipo) {
  console.log('Detalle de equipo : ', compuDetalle);
  console.log('año de fabricacion de equipo : ', compuDetalle.year);
}

let laptops = {
  nombre: 'Asus',
  color: 'ploma',
  year: 2018,
};
interface detalleEquipo {
  nombre: string;
  color: string;
  year: number;
}
taller(laptops);

// * * * motos SHOP* * *

function tallerMoto(detalle: tipadoMoto) {
  console.log(detalle);
}

let moto:tipadoMoto = {
  nombre: 'yamaha',
  color: 'rojo',
  placa: 'imb',
  year: 2021,
  matriculado: true,
};

interface tipadoMoto {
  nombre: string;
  color: string;
  placa: string;
  year: number;
  matriculado: boolean;
}

tallerMoto(moto);

// validar el siguinete objeto

function heroesDC(detalleDC) {
  console.log(detalleDC);
}

var batman = {
  nombre: 'Bruno Díaz',
  artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu'],
};

interface tipadoHeroe {
  nombre: string;
  artesMarciales: string[];
}

heroesDC(batman.artesMarciales[0]);

let a: number = 3;
let b = 7;

let resultadoDoble = (a: number, b: number) => {
  return (a + b) * 2;
};
console.log(resultadoDoble(3, 6));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre: string, arma: string = 'arco', poder?: string) {
  let mensaje: string;
  if (poder) {
    //mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    mensaje =
      `${nombre}` +
      ' tiene el poder de: ' +
      `${poder}` +
      ' y un arma: ' +
      `${arma}`;
    return mensaje;
  } else {
    mensaje = nombre + ' tiene un ' + poder;
  }
}

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
  base: number;
  altura: number;

  calcularArea() {
    return this.base * this.altura;
  }
}
