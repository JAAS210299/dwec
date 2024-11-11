class Entrenador extends Personal{
    constructor(
        id:number,
        nombre:string,
        apellidos:string, 
        edad: number, 
        private idFederacion:number
        ) 
        {
        super(id, nombre, apellidos, edad);
    }

    public dirigirPartido():void{

    }
    public dirigirEntrenamiento():void{

    }
}