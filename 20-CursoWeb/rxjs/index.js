"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var src$ = rxjs_1.of(1, 2, 3, 4, 5);
var rango$ = rxjs_1.range(1, 10, rxjs_1.asyncScheduler);
src$.subscribe(console.log);
console.log('uso de range inicio');
rango$.subscribe(console.log);
console.log('uso de range fin');
