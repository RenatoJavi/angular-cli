
//import {getHeroe} from './08-impo-export';


import {getHeroe} from './08-impo-export'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
/////////////////////////////////
// const  promesa=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       const heroe=getHeroe(2);   
//       reject(heroe); 
//     // reject('NO SE PUDO ENCONTRAR EL HEROE');
//     },2000);
// });
// promesa.then((heroe)=>{console.log(" HEROES: ",heroe)})
// .catch(err=>console.warn(err));

console.log('nueva linea')
const getHeroeByAsync=(id)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const p1=getHeroe(id);   
             if (p1) {
      resolve(p1);      
    } else {
      reject('NO SE PUDO ENCONTRAR EL HEROE');
    }
    
    },2000);
  });
  //return promesa;
}
//  getHeroeByAsync(15).
//  then(heroe=>console.log("Lista heroe: ",heroe))
//  .catch(  err=>console.console.(err) );
//*****otra forma de mostrar la promesa en consola */

getHeroeByAsync(4).then(console.log).catch(console.warn);