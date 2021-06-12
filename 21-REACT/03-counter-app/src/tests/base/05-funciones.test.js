
import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones';



describe('Prueba 05-funciones', () => {
    test(' debe retornar un OBJETO', () => {
const userTest={
        nombreUsuario:'Desarrollador' ,
         id:'abc123',
         };
     const user=getUser();
    console.log(user);
    expect(user).toEqual(userTest);
    })
    

    test('getUsuarioActivo debe retornar un objeto ', () => {
        
        const nombre='Cesar'
        const useActivoTest={
            id:'abc123',
            username:'Cesar',
        };
        const user2=getUsuarioActivo(nombre);

        console.log(user2);

            expect(user2).toEqual(useActivoTest);
    })
    
    
});
// getUsuarioActivo debe retornar un objeto



