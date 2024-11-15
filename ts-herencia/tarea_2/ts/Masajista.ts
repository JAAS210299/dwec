import { Personal } from "./Personal.js";
// nota mental los import y export 
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
        this.titulacion = titulacion;
        this.aniosExperiencia = aniosExperiencia;
    }
    
    public darMasaje():void{
        
    }
}

// const masajista = new Masajista (1, 'la', 'aa', 1, 2);

// console.log(JSON.stringify(masajista.darMasaje));