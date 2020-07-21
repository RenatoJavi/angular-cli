const calculadora = require("./02-calculadora");
const fecha = require("../tiempo/03-tiempo");
const fs = require("fs");
const pepito = require("express");

console.log("Calculadora:", calculadora.suma(4, 7));
console.log("Calculadora:", calculadora.resta(4, 7));
console.log("Calculadora:", calculadora.multiplicar(4, 7));

console.log("fecha de hoy: ", fecha);
console.log("fs : ", fs);
console.log("PEPITO: ", pepito);