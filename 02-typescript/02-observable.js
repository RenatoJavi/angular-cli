//02-obsrvables
const rxjs = require("rxjs");
const observable$ = rxjs.of(1);
console.log(observable$);
observable$.suscribe((ok) => {
    console.log(ok);
}, (error) => {
    console.log(error);
});
