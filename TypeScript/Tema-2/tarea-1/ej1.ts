
let nombre:string = "Nestor Kauil";
let edad:number = 25;
let personaje:string[] = ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"];

console.log(`Nombre: ${nombre} edad: ${edad} personaje: ${personaje}`);

let textNode = document.getElementById("h1-ej1") as HTMLElement;

textNode.textContent = `Nombre: ${nombre} edad: ${edad} personaje: ${personaje}`;