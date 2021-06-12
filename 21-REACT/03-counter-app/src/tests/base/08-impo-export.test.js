import { getHeroeById, getHeroeByOwner } from "../../../../mi-app-react/src/bases/08-impo-export";
import heroes from "../../../../mi-app-react/src/data/heroes";


describe('Pruebas en funciones de heroes', () => {

    test('debe retornar un heroe por ID', () => {
        const id=1;
        const heroe=getHeroeById(id);
const heroeData=heroes.find(h=>h.id===id);

expect(heroe).toEqual( heroeData);




    });
    test('debe retornar undefine si heroe no exite', () => {
        const id=10;
        const heroe=getHeroeById(id);
expect(heroe).toBe( undefined);




    });
    test('debe retornar un arreglo con los heroes de DC', () => {
       console.log('***********dc************');
        const owner='DC';
        const heroe=getHeroeByOwner(owner);
const heroeOwner=heroes.filter(h=>h.owner==='DC');
console.log(heroeOwner);
expect(heroeOwner).toEqual(heroeOwner);

    });

    test('debe retornar un arreglo con los heroes de MARVEL', () => {
        console.log('***********Marvel***********');
         const owner='Marvel';
         const heroe2=getHeroeByOwner(owner);
 const heroeOwner=heroes.filter(h=>h.owner===owner);
 console.log('this is Marvel ! ',heroeOwner);
 expect(heroeOwner.length).toBe(2);
 
     });
    
    
    
});
