"use strict";
class Entrenador extends Personal {
    idFederacion;
    constructor(id, nombre, apellidos, edad, idFederacion) {
        super(id, nombre, apellidos, edad);
        this.idFederacion = idFederacion;
    }
    dirigirPartido() {
    }
    dirigirEntrenamiento() {
    }
}
