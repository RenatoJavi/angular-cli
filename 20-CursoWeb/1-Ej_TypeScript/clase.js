var Avenger = /** @class */ (function () {
    function Avenger(nombre, nombreReal, puedePelear) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        this.equipo = 'AVENGER 1';
        this.puedePelear = puedePelear;
    }
    return Avenger;
}());
var antman = new Avenger('airoman', 'tonny Start', true);
console.log(antman);
