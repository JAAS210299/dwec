"use strict";
class Personal {
    id;
    nombre;
    apellidos;
    edad;
    constructor(id, nombre, apellidos, edad) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    concentrarse() {
        console.log(`${this.nombre} está concentrándose.`);
    }
    viajar() {
        console.log(`${this.nombre} está viajando.`);
    }
    get Id() {
        return this.id;
    }
    set Id(nuevoId) {
        this.Id = nuevoId;
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    get Apellidos() {
        return this.apellidos;
    }
    set Apellidos(nuevosApellidos) {
        this.apellidos = nuevosApellidos;
    }
    get Edad() {
        return this.edad;
    }
    set Edad(nuevaEdad) {
        this.edad = nuevaEdad;
    }
}
