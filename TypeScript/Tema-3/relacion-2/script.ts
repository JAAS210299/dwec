let ventana:Window | null = null;
let posicionInicial: { left: number; top: number } | null = null; // Variable para almacenar la posición inicial

// Ejercicio 1 - En el siguiente código puede ver una etiqueta “p” (párrafo) la cual lleva asignada un evento onclick el cual llamará a una función llamada “myFunction”.  Bien, pues debe modificar el script para que añada un botón al cual también le asignaremos un evento onclick, y cuando se realice click sobre él, se debe abrir una ventana nueva (no hace falta que tenga ningún contenido especial):
function ej1_r2(): void {
    const demoElement = document.getElementById("demo1");
    
    if (demoElement && demoElement.innerHTML !== null) {
        demoElement.innerHTML = "¡ME HAS HECHO CLICK!";
    }
}

// Ejercicio 2 - Añade al código del programa anterior un nuevo botón con el texto “Ejercicio2” que sea capaz de abrir una nueva ventana con los siguientes parámetros: que tenga barra de herramientas, que sea escrolable, y con una anchura y altura de 400 pixeles. Los demás parámetros son indiferentes.
function ej2_r2(): void {
    const width: number = 400;
    const height: number = 400;

    // Calcula la posición para centrar la ventana
    const left: number = (window.innerWidth / 2) - (width / 2);
    const top: number = (window.innerHeight / 2) - (height / 2);
    
    if (ventana === null || ventana.closed) {
        ventana = window.open(
            "", // URL que deseas abrir
            "_blank", // Nombre de la ventana
            `toolbar=yes,scrollbars=yes,width=${width},height=${height},left=${left},top=${top}` // Parámetros de la ventana
        );
        posicionInicial = { left: left, top: top }; // Guarda la posición inicial
        alert("Ventana abierta");
    } else {
        alert("La ventana ya está abierta");
    }
}


// Ejercicio 3 - Modifica el ejercicio anterior de tal forma que aparezca un tercer botón con el texto “Ejercicio3” y que sea capaz de cerrar la ventana abierta del ejercicio anterior. Además añade una serie de “logs” por la consola que vaya mostrando el proceso de “ventana abierta” (cuando se abra), “la venta ya está abierta” (si se intenta abrir la ventana que ya está abierta), “ventana cerrada” (cuando se cierre), la “ventana ya estaba cerrada” (cuando se intenta cerrar la ventana que ya está cerrada). 
function ej3_r2(): void{
     // Verifica si la ventana está abierta
     if (ventana && !ventana.closed) {
        ventana.close();
        ventana = null; // Resetea la variable de la ventana
        alert("Ventana cerrada");
    } else {
        alert("La ventana ya estaba cerrada");
    }
}

// Ejercicio 4 - Modifica el programa anterior añadiendo un nuevo botón “Ejercicio4” el cual si la ventana está abierta (la del ejercicio 2), debe de desplazarla 50px a la derecha y 50px hacia abajo, partiendo de la posición en la que estuviera antes de pulsar el botón (desplazamiento relativo).  Añada también a este botón la lógica necesaria para guardar la posición inicial de la ventana cuando se abrió por primera vez (solo la primera vez que pulsamos el botón) y así debemos debemos añadir un segundo botón a la web denominado (“Ejercicio 4 - Inicial”) el cual sea capaz de mover la pantalla a su posición inicial (desplazamiento absoluto).  
function ej4_r2(): void {
    if (ventana && !ventana.closed) {
        ventana.moveBy(50, 50); // Desplaza 50px a la derecha y 50px hacia abajo
        alert("Ventana desplazada  1");
    }
}

// Función para mover a la posición inicial
function moverVentanaInicial(): void {
    if (ventana && !ventana.closed && posicionInicial) {
        ventana.moveTo(posicionInicial.left, posicionInicial.top); // Mueve a la posición inicial
        alert("Ventana movida a la posición inicial");
    }
}

// Ejercicio 5 - Realice una web que contenga un botón el cual cuando sea pulsado y sea capaz de abrir una ventana de 400x400 localizada en una posición random dentro de los márgenes de la pantalla. Además cada segundo que pasa la pantalla debe de disminuir en tamaño de 40 en 40 pixeles tanto de alto como ancho y cuando tenga una medida menor o igual a 160 x 160 empiece a crecer hasta un tamaño no mayor que 400x400. 
let ventanaEj5: Window | null = null;
let anchoVentana = 400;
let altoVentana = 400;
let creciendo = false;

function ej5_r2(): void {
    const maxWidth = 400;
    const maxHeight = 400;
    const minWidth = 160;
    const minHeight = 160;

    // Posición aleatoria dentro de los márgenes de la pantalla
    const left = Math.floor(Math.random() * (window.innerWidth - anchoVentana));
    const top = Math.floor(Math.random() * (window.innerHeight - altoVentana));

    if (ventanaEj5 === null || ventanaEj5.closed) {
        ventanaEj5 = window.open(
            "", 
            "_blank", 
            `width=${anchoVentana},height=${altoVentana},left=${left},top=${top}`
        );

        const resizeInterval = setInterval(() => {
            if (ventanaEj5 && !ventanaEj5.closed) {
                if (creciendo) {
                    anchoVentana += 40;
                    altoVentana += 40;
                    if (anchoVentana >= maxWidth && altoVentana >= maxHeight) {
                        creciendo = false;
                    }
                } else {
                    anchoVentana -= 40;
                    altoVentana -= 40;
                    if (anchoVentana <= minWidth && altoVentana <= minHeight) {
                        creciendo = true;
                    }
                }
                ventanaEj5.resizeTo(anchoVentana, altoVentana);
            } else {
                clearInterval(resizeInterval);
            }
        }, 1000);
    }
}
// Ejercicio 6 - 
// Escribe una web de ejemplo que contenga una función “imprimirNumeros ( desde , hasta )” que muestre por consola un número cada segundo, empezando la cuenta desde el argumento  “desde” y termine la cuenta hasta el argumento  “hasta”.
// Ejercicio 6A -  Debe de implementarlo haciendo uso de “setInterval”.
// Ejercicio 6B - Debe de implementarlo haciendo uso de “setTimeOut”. (Expresamente solo usar setTimeOut, es decir, no usar setInterval)
// Ejercicio 6A - Usando setInterval
function imprimirNumerosIntervalo(desde: number, hasta: number): void {
    let contador = desde;
    const intervalo = setInterval(() => {
        alert(contador);
        if (contador === hasta) {
            clearInterval(intervalo);
        } else {
            contador++;
        }
    }, 1000);
}

// Ejercicio 6B - Usando setTimeout
function imprimirNumerosTimeout(desde: number, hasta: number): void {
    let contador = desde;
    function mostrarNumero() {
        alert(contador);
        if (contador < hasta) {
            contador++;
            setTimeout(mostrarNumero, 1000);
        }
    }
    mostrarNumero();
}
