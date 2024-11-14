"use strict";
class Futbolista extends Personal {
    dorsal;
    constructor(id, nombre, apellidos, edad, dorsal) {
        super(id, nombre, apellidos, edad);
    }
    jugarPartido() {
    }
    entrenar() {
    }
    get Dorsal() {
        return this.dorsal;
    }
    set Dorsal(nuevoDorsal) {
        this.dorsal = nuevoDorsal;
    }
}
