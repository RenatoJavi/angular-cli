import { async } from "rxjs"
import { getImagen } from "../../../../mi-app-react/src/bases/11-async-await"

describe('prueba con async-await y fetch', () => {
    test('debe retornar el url de la imagen', async() => {
      const url= await getImagen();
console.log(url);
      expect(typeof url).toBe('string');


    });
    
});
