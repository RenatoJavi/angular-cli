//template string

const nombre='Javier';
const apellido='Salazar';

//const nombreCompleto=nombre+''+apellido;
const nombreCompleto=` hi mundo, I am  ${nombre } ${apellido}`;
console.log(nombreCompleto);
export function getSaludo(nombre='Sonia'){

    return "hola "+ nombre+'!';

}
//console.log(`${getSaludo(nombre)}`);