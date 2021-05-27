let fecha = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(fecha(4, 10));

let hulk = {
  //objeto hulk
  nombre: 'Hulk',
  smash() {
    console.log(this.nombre, 'APLASTA');
  },
};

hulk.smash();

let avenger = {
  nombre: 'STEVE',
  clave: 'capitan america',
  poder: 'Droga',
};
let { nombre, clave, poder } = avenger;
console.log(nombre, clave, poder.toUpperCase());

//DESTRUCTURACION DE ARREGLOS
let avenger2: string[] = ['thor', 'steve', 'spider'];
let [thor, steve, iroman] = avenger2;
console.log(thor, steve, iroman);
