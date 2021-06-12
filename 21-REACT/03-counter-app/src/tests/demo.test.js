

describe('Pruebas en el archivo demo.test.js', () => {
    

    test('deben ser iguales los string', () => {
        //1 inicializacion  
      const msaje="hola mundo";
    
    
        //2. estimulo
        const mesaje2=`hola mundo`;
    
        //observar
      expect(msaje).toBe(mesaje2);
    
    })
    

});



