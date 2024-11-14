"use strict";
class Masajista extends Personal {
    titulacion;
    aniosExperiencia;
    constructor(id, nombre, apellidos, edad, titulacion, aniosExperiencia) {
        super(id, nombre, apellidos, edad);
        this.titulacion = titulacion;
        this.aniosExperiencia = aniosExperiencia;
    }
    darMasaje() {
    }
}
