"use strict";
exports.__esModule = true;
function enviarMision(xmen) {
    console.log('Name : ', xmen.nombre);
    console.log('Power : ', xmen.poder);
}
var wolverin = {
    nombre: 'lOGAN',
    poder: 'titanio'
};
//llamar a la funcion
enviarMision(wolverin);
function llantas(todoTerreno) {
    console.log('llanta de tipo: ', todoTerreno.tipo);
    console.log('ring de la llanta : ', todoTerreno.ring);
}
var codigoLlanta = {
    tipo: 'todo terreno',
    ring: 18
};
llantas(codigoLlanta);
//****** BICICLETA*******
function bicicleta(caracteristica) {
    console.log('Caracteristicas generales: ', caracteristica);
    console.log('Color : ', caracteristica.colorBici);
}
var objBicicleta = {
    nombre: 'kawasaky',
    tamanio: 27.5,
    componentes: 'shimano',
    colorBici: 'yellow'
};
//llamado a la funcion
bicicleta(objBicicleta);
// * * * reparaciones * * *
function taller(compuDetalle) {
    console.log('Detalle de equipo : ', compuDetalle);
    console.log('año de fabricacion de equipo : ', compuDetalle.year);
}
var laptops = {
    nombre: 'Asus',
    color: 'ploma',
    year: 2018
};
taller(laptops);
// * * * motos SHOP* * *
function tallerMoto(detalle) {
    console.log(detalle);
}
var moto = {
    nombre: 'yamaha',
    color: 'rojo',
    placa: 'imb',
    year: 2021,
    matriculado: true
};
tallerMoto(moto);
// validar el siguinete objeto
function heroesDC(detalleDC) {
    console.log(detalleDC);
}
var batman = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
};
heroesDC(batman.artesMarciales[0]);
var a = 3;
var b = 7;
var resultadoDoble = function (a, b) {
    return (a + b) * 2;
};
console.log(resultadoDoble(3, 6));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, arma, poder) {
    var mensaje;
    if (poder) {
        mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        console.log(mensaje);
    }
    else {
        mensaje = nombre + ' tiene un ' + poder;
        console.log(mensaje);
    }
}
console.log(getAvenger);
