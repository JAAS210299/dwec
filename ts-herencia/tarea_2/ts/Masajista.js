import { Personal } from "./Personal.js";
// nota mental los import y export 
class Masajista extends Personal {
    constructor(id, nombre, apellidos, edad, titulacion, aniosExperiencia) {
        super(id, nombre, apellidos, edad);
        this.titulacion = titulacion;
        this.aniosExperiencia = aniosExperiencia;
        this.titulacion = titulacion;
        this.aniosExperiencia = aniosExperiencia;
    }
    darMasaje() {
    }
}
// const masajista = new Masajista (1, 'la', 'aa', 1, 2);
// console.log(JSON.stringify(masajista.darMasaje));
