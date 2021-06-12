import { retornaArreglo } from "../../base/07-des-arreglos";

describe('Pruebas en desestructuracion', () => {
  

  test('debe retornar un string y un numero', () => {

  const [letras,numeros]=retornaArreglo();

  expect(letras).toBe('abc');
  expect(typeof letras).toBe('string');
  expect(numeros).toBe(1234);
  console.log(typeof numeros);
    
  })
  
});
