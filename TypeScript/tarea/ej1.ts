
let nombre:string = "Nestor Kauil";
let edad:number = 25;
let personaje:string[] = ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"];

console.log(`Nombre: ${nombre} edad: ${edad} personaje: ${personaje}`);

let text = document.getElementById("h1-ej1");

text.textContent = `Nombre: ${nombre} edad: ${edad} personaje: ${personaje}`;