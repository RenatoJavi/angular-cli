//nombre tiene que ser un  string
function saludar(nombre, ciudad) {
    console.log("Hola : " + nombre.toUpperCase()+ciudad);

}

var lobitoObjeto = {
    nombre: "jonas lindo perro"
};
var casaObjeto = {
    ciudad: " Ibarra"
};

saludar(lobitoObjeto.nombre,casaObjeto.ciudad);