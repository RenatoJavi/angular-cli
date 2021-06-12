// //template string
import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Prueba en 02-template-string.js', () => {

    test('prueba en el metodo getSaludo ', () => {
const name="Niko";
const saludo= getSaludo(name);

expect(saludo).toBe('hola '+name+'!');

        
    })
    //getSaludo debe retornar Hola Sonia! si  no hay argumento nombre

    test('getSaludo debe retornar Hola Sonia! si  no hay argumento nombre ', () => {
        const saludo=getSaludo();
        expect(saludo).toBe('hola Sonia!');
    })
    
});
