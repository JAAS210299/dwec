class Rectangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calculadorArea(): number {
        return this.base * this.altura;
    }
}

const clase = new Rectangulo(2, 3);
console.log(clase.calculadorArea());
