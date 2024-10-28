"use strict";
let ventana = null;
let posicionInicial = null; // Variable para almacenar la posición inicial
// Ejercicio 1 - En el siguiente código puede ver una etiqueta “p” (párrafo) la cual lleva asignada un evento onclick el cual llamará a una función llamada “myFunction”.  Bien, pues debe modificar el script para que añada un botón al cual también le asignaremos un evento onclick, y cuando se realice click sobre él, se debe abrir una ventana nueva (no hace falta que tenga ningún contenido especial):
function ej1_r2() {
    const demoElement = document.getElementById("demo1");
    if (demoElement && demoElement.innerHTML !== null) {
        demoElement.innerHTML = "¡ME HAS HECHO CLICK!";
    }
}
// Ejercicio 2 - Añade al código del programa anterior un nuevo botón con el texto “Ejercicio2” que sea capaz de abrir una nueva ventana con los siguientes parámetros: que tenga barra de herramientas, que sea escrolable, y con una anchura y altura de 400 pixeles. Los demás parámetros son indiferentes.
function ej2_r2() {
    const width = 400;
    const height = 400;
    // Calcula la posición para centrar la ventana
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);
    if (ventana === null || ventana.closed) {
        ventana = window.open("", // URL que deseas abrir
        "_blank", // Nombre de la ventana
        `toolbar=yes,scrollbars=yes,width=${width},height=${height},left=${left},top=${top}` // Parámetros de la ventana
        );
        posicionInicial = { left: left, top: top }; // Guarda la posición inicial
        console.log("Ventana abierta");
    }
    else {
        console.log("La ventana ya está abierta");
    }
}
// Ejercicio 3 - Modifica el ejercicio anterior de tal forma que aparezca un tercer botón con el texto “Ejercicio3” y que sea capaz de cerrar la ventana abierta del ejercicio anterior. Además añade una serie de “logs” por la consola que vaya mostrando el proceso de “ventana abierta” (cuando se abra), “la venta ya está abierta” (si se intenta abrir la ventana que ya está abierta), “ventana cerrada” (cuando se cierre), la “ventana ya estaba cerrada” (cuando se intenta cerrar la ventana que ya está cerrada). 
function ej3_r2() {
    // Verifica si la ventana está abierta
    if (ventana && !ventana.closed) {
        ventana.close();
        ventana = null; // Resetea la variable de la ventana
        console.log("Ventana cerrada");
    }
    else {
        console.log("La ventana ya estaba cerrada");
    }
}
// Ejercicio 4 - Modifica el programa anterior añadiendo un nuevo botón “Ejercicio4” el cual si la ventana está abierta (la del ejercicio 2), debe de desplazarla 50px a la derecha y 50px hacia abajo, partiendo de la posición en la que estuviera antes de pulsar el botón (desplazamiento relativo).  Añada también a este botón la lógica necesaria para guardar la posición inicial de la ventana cuando se abrió por primera vez (solo la primera vez que pulsamos el botón) y así debemos debemos añadir un segundo botón a la web denominado (“Ejercicio 4 - Inicial”) el cual sea capaz de mover la pantalla a su posición inicial (desplazamiento absoluto).  
function ej4_r2() {
    if (ventana && !ventana.closed) {
        ventana.moveBy(50, 50); // Desplaza 50px a la derecha y 50px hacia abajo
        console.log("Ventana desplazada");
    }
}
// Función para mover a la posición inicial
function moverVentanaInicial() {
    if (ventana && !ventana.closed && posicionInicial) {
        ventana.moveTo(posicionInicial.left, posicionInicial.top); // Mueve a la posición inicial
        console.log("Ventana movida a la posición inicial");
    }
}
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
