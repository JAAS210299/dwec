import { Personal } from "./Personal.js";
// nota mental los import y export 
class Entrenador extends Personal{
    private idFederacion:number;
    constructor(
        id:number,
        nombre:string,
        apellidos:string, 
        edad: number, 
        idFederacion:number
        ) 
        {
        super(id, nombre, apellidos, edad);
        this.idFederacion = idFederacion;
    }

    public dirigirPartido():void{

    }
    public dirigirEntrenamiento():void{

    }


    public get IdFederacion(): number {
        return this.idFederacion;
    }

    public set IdFederacion(nuevoDorsal: number) {
        this.idFederacion = nuevoDorsal;
    }
}

const entrenador = new Entrenador (1, 'la', 'aa', 1, 2);

console.log(JSON.stringify(entrenador.IdFederacion));