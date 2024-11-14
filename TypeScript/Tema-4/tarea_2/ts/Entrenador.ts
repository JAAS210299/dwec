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