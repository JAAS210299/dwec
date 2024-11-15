
export class Personal {
    private id: number;
    private nombre: string;
    private apellidos: string;
    private edad: number;

    constructor(id: number, nombre: string, apellidos: string, edad: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }


    public concentrarse(): void {
        console.log(`${this.nombre} está concentrándose.`);
    }

    public viajar(): void {
        console.log(`${this.nombre} está viajando.`);
    }

    public get Id(): number {
        return this.id;
    }

    public set Id(nuevoId: number) {
        this.Id = nuevoId;
    }

    public get Nombre(): string {
        return this.nombre;
    }
    public set Nombre(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    }

    public get Apellidos(): string {
        return this.apellidos;
    }
    public set Apellidos(nuevosApellidos: string) {
        this.apellidos = nuevosApellidos;
    }

    public get Edad(): number {
        return this.edad;
    }

    public set Edad(nuevaEdad: number) {
        this.edad = nuevaEdad;
    }
}