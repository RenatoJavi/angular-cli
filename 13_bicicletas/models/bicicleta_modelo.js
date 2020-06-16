var bicicleta = function(id, color, modelo, ubicacion) {

    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;


}

bicicleta.prototype.toString = function() {

    return 'id:' + this.id + "|color:" + this.color;


}

bicicleta.allBicis = []; //arreglo donde gaurdar las bicis
bicicleta.add = function(aBici) {
    bicicleta.allBicis.push(aBici);
}


var a = new bicicleta(1, 'rojo', 'urbana', [-34.65565, -40.5564]);
var b = new bicicleta(2, 'amarillo', 'ruta', [-2.32323, -532323]);
module.exports = bicicleta;