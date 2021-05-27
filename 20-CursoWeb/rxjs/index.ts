import { of, range, asyncScheduler } from 'rxjs';
const src$ = of(1, 2, 3, 4, 5);
const rango$ = range(1, 10, asyncScheduler);

src$.subscribe(console.log);
console.log('uso de range inicio');
rango$.subscribe(console.log);
console.log('uso de range fin');
