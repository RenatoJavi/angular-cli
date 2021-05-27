class Avenger {
  nombre: string;
  equipo: string;
  nombreReal: string;
  puedePelear: boolean;
  peleasGanadas: number;
  
  constructor(nombre: string, nombreReal: string, puedePelear?: boolean) {
    this.nombre = nombre;
    this.nombreReal = nombreReal;
    this.equipo = 'AVENGER 1';
    this.puedePelear = puedePelear;
  }
}

let antman: Avenger = new Avenger('airoman', 'tonny Start', true);
console.log(antman);
