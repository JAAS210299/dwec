class Masajista extends Personal{
    constructor(
        id:number,
        nombre:string,
        apellidos:string, 
        edad: number, 
        private titulacion:string,
        private aniosExperiencia:number
        ) 
        {
        super(id, nombre, apellidos, edad);
    }
    
    public darMasaje():void{
        
    }
}