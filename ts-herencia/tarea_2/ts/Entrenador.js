import { Personal } from "./Personal.js";
// nota mental los import y export 
class Entrenador extends Personal {
    constructor(id, nombre, apellidos, edad, idFederacion) {
        super(id, nombre, apellidos, edad);
        this.idFederacion = idFederacion;
    }
    dirigirPartido() {
    }
    dirigirEntrenamiento() {
    }
    get IdFederacion() {
        return this.idFederacion;
    }
    set IdFederacion(nuevoDorsal) {
        this.idFederacion = nuevoDorsal;
    }
}
const entrenador = new Entrenador(1, 'la', 'aa', 1, 2);
console.log(JSON.stringify(entrenador.IdFederacion));
