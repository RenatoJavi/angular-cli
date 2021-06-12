//funciones

const saludar=function (nombre){

return `hola ${nombre}`;

};

const saludar2=(direccion)=>{

    return `la direccion es ${direccion}`;
};

const sucursal=(almacen)=> `Nombre del almacen:  ${almacen}`;


// console.log(saludar2('la cocha'));
// console.log(sucursal('Almacen internacional'));

export const getUser=()=>{
return{
nombreUsuario:'Desarrollador' ,
id:'abc123',
}

}
//console.table(getUser());
// EJEMPLO 1
export const getUsuarioActivo=(nombre)=>{
    return{
        id:'abc123',
        username:nombre,
    }
}
getUsuarioActivo('Cesar');
//console.log(getUsuarioActivo('Xavier'));
//EJEMPLO2



const getUsuarioActivo2=(nombre)=>
    ({
        id:'abc123',
        username:nombre,
    })

//console.log(getUsuarioActivo2('javi'));