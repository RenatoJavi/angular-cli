//ejecura un codigo cuando una tarea asincrona  esta terminadada

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    //***CUERPO**todo el codigo que Quiero ejecutar cuando algo pasa
    console.log('promesa terminada');
    resolve('');

    //Termina mal
    reject();
  }, 1500);
});
console.log('paso 1');

//Llamado a la función
promesa.then(
  () => {
    console.log('Se ejecuto bien la promesa');
  },
  () => {
    console.log('Se ejecuto mal la promesa');
  }
);
console.log('paso 2');
