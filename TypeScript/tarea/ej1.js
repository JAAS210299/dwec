"use strict";
let nombre = "Nestor Kauil";
let edad = 25;
let personaje = ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"];
console.log(`Nombre: ${nombre} edad: ${edad} personaje: ${personaje}`);
let textNode = document.getElementById("h1-ej1");
textNode.textContent = `Nombre: ${nombre} edad: ${edad} personaje: ${personaje}`;
