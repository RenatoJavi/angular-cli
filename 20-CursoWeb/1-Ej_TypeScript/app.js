"use strict";
exports.__esModule = true;
var nombre = 'Javi, todo va bien';
var edad = 32;
//let texto = 'hola' + '  ' + nombre + '  ' + edad + '';
var texto = "Hola, " + nombre;
//console.log(texto);
function getProducto() {
    return 'alternador Honda';
}
var repuesto = "" + getProducto();
console.log(repuesto);
function activar(quien, msmOpcional) {
    console.log("" + quien + '  ' + 'activo la alarma' + '  ' + msmOpcional);
}
activar('El comisionado Gordon', 'a media noche');
console.log('* * * * * Nueva linea * * * *');
var miFuncion = function (a) {
    return a;
};
var mifLECHA = function (a) {
    return a;
};
var miFuncion2 = function (a, b) {
    return a + b;
};
console.log(miFuncion2(7, 7));
var flecha2 = function (n1, n2) {
    return n1 + n2;
};
console.log(flecha2(3, 9));
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3('Proyecto de enprender'));
var flecha3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(flecha3('Proyecto de enprender'));
console.log('- - -  Pero para  que sirve la funcion de Flecha ? - - - ');
var hulk = {
    //=>objeto
    nombre: 'Holk',
    smash: function () {
        console.log(this.nombre + 'aplasta');
    }
};
hulk.smash();
var auto = {
    fabricante: 'BMW',
    velocidad: function () {
        console.log(this.fabricante + 'mejor auto del momento');
    }
};
auto.velocidad();
