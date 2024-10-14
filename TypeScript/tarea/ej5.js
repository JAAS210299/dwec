"use strict";
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calculadorArea() {
        return this.base * this.altura;
    }
}
const clase = new Rectangulo(2, 3);
console.log(clase.calculadorArea());
