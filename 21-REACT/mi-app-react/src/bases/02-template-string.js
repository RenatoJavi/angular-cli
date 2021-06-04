//template string

const nombre='Javier';
const apellido='Salazar';
const girl=' Patito';

//const nombreCompleto=nombre+''+apellido;
const nombreCompleto=` hi mundo, I am  ${nombre } ${apellido}`;
console.log(nombreCompleto);
function getSaludo(nombre){

    return "hola guanbrita"+ nombre;

}
console.log(`${getSaludo(girl)}`);