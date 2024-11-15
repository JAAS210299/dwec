import { Personal } from "./Personal.js";
// nota mental los import y export 
class Futbolista extends Personal {
    constructor(id, nombre, apellidos, edad, dorsal) {
        super(id, nombre, apellidos, edad);
        this.dorsal = dorsal;
    }
    jugarPartido() {
        console.log("hoy jugamos partido");
    }
    entrenar() {
        console.log("Hoy nos toca entrenar");
    }
    get Dorsal() {
        return this.dorsal;
    }
    set Dorsal(nuevoDorsal) {
        this.dorsal = nuevoDorsal;
    }
}
let futbolista = new Futbolista(1, 'la', 'aa', 1, 2);
console.log(JSON.stringify(futbolista.Dorsal));
futbolista.Dorsal = 10;
console.log(JSON.stringify(futbolista.Dorsal));
