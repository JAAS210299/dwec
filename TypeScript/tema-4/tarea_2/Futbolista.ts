class Futbolista extends Personal{
    private dorsal:number

    constructor(
        id:number,
        nombre:string,
        apellidos:string, 
        edad: number, 
        dorsal:number
        ) 
        {
        super(id, nombre, apellidos, edad);
    }

    public jugarPartido():void{

    }
    public entrenar():void{

    }

    public get Dorsal(): number {
        return this.dorsal;
    }

    public set Dorsal(nuevoDorsal: number) {
        this.dorsal = nuevoDorsal;
    }
}