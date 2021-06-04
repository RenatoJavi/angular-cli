//objetos literales

const persona={ //objeto

    nombre:"Nico",
    apellido:'Salas',
    edad:45,
    direccion:{
        ciudad:'New York',
        calle:'Venezula',


    }
};

// console.table({persona});
// console.log(persona);
const persona2={...persona};
persona2.nombre='Joaquin';
console.log("persona  ",persona);
console.log("persona 2 ",persona2);