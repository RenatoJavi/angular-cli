//desctructuracion de objetos

const foo=['uno','dos','tres'];
const [red,yellow,greem]=foo;
console.log(red);
console.log(yellow);
console.log(greem);

//ejemplo objeto
const persona={
    nombre:'Xavi',
    apellido:'Andrade',
    clave:3409,
  ciudad:'QUITO',

}

const {clave,nombre}=persona;

// console.log(clave);
// console.log(nombre);

//ejemplo2
const retornaPersona=({ciudad,nombre,codPostal=1079})=>{

 //console.log(ciudad,nombre,codPostal);
 return{
   nombreClave:'dante',
   code:1223,
   latlng:{
    lat:12122,
    long:-1762
 
  }
 }

};


const {nombreClave,latlng:{lat,long}}=retornaPersona(persona);
console.log(nombreClave);
console.log(lat,long);