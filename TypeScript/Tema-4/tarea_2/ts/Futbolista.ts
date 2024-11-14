class Futbolista extends Personal {
    private dorsal: number;

    constructor(
        id: number,
        nombre: string,
        apellidos: string,
        edad: number,
        dorsal: number
    ) {
        super(id, nombre, apellidos, edad);
        this.dorsal = dorsal;
    }


    public jugarPartido(): void {
        console.log("hoy jugamos partido");
    }
    public entrenar(): void {
        console.log("Hoy nos toca entrenar")
    }

    public get Dorsal(): number {
        return this.dorsal;
    }

    public set Dorsal(nuevoDorsal: number) {
        this.dorsal = nuevoDorsal;
    }
}