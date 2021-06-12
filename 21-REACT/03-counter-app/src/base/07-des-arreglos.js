//desctructuracion de arreglos

const personajes=['GOKU','VEGET','TRONS'];


const [,,per3]=personajes;
//console.log(per3);


export  const retornaArreglo=()=>{
  return ['abc',1234];

}

const [letras,num]=retornaArreglo();
//para desestructurar const[variables]
//console.log(letras,num);

//tarea un hook es una funcion
const usState=(valor)=>{
  return [valor,()=>{console.log('hola mundo')}];

};
const [nombre,setNombre]=usState('Goku');
//console.log(nombre);
setNombre();
