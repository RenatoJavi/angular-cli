import { getHeroeByIdAsync } from "../../../../mi-app-react/src/bases/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('getHeroeByIdSync debe retornar un heroe async', (done) => {
        const id=1;
        getHeroeByIdAsync(id).then(heroe=>{
            expect(heroe).toBe(heroes[0]);
            done();

        });
        
    });

    test('debe optener un error si el heroe por id noexiste', (done) => {
        const id=10;
        getHeroeByIdAsync(id).catch(error=>{

            expect(error).toBe("No se pudo encontrar le error");

        })
            done();

        
    })
    
    
    
});

