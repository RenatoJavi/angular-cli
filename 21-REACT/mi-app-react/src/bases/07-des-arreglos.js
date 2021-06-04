//desctructuracion de arreglos

const personajes=['GOKU','VEGET','TRONS'];


const [,,per3]=personajes;
console.log(per3);


const retornaArreglo=()=>{
  return ['abc',123];

}

const [letras,num]=retornaArreglo();
//para desestructurar const[variables]
console.log(letras,num);

//tarea
const useState=(valor)=>{
  return [valor,()=>{console.log('hola mundo')}];

};
const [nombre,setNombre]=useState('Goku');
console.log(nombre);
setNombre();
