var fecha = function (num1, num2) {
    return num1 + num2;
};
console.log(fecha(4, 10));
var hulk = {
    //objeto hulk
    nombre: 'Hulk',
    smash: function () {
        console.log(this.nombre, 'APLASTA');
    }
};
hulk.smash();
var avenger = {
    nombre: 'STEVE',
    clave: 'capitan america',
    poder: 'Droga'
};
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder.toUpperCase());
//DESTRUCTURACION DE ARREGLOS
var avenger2 = ['thor', 'steve', 'spider'];
var thor = avenger2[0], steve = avenger2[1], iroman = avenger2[2];
console.log(thor, steve, iroman);
