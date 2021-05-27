"use strict";
exports.__esModule = true;
//ejecura un codigo cuando una tarea asincrona  esta terminadada
var promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //***CUERPO**todo el codigo que Quiero ejecutar cuando algo pasa
        console.log('promesa terminada');
        resolve('');
        //Termina mal
        reject();
    }, 1500);
});
console.log('paso 1');
//Llamado a la función
promesa.then(function () {
    console.log('Se ejecuto bien la promesa');
}, function () {
    console.log('Se ejecuto mal la promesa');
});
console.log('paso 2');
