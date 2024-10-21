"use strict";
var _a, _b;
// Ejercicio 1 
// Escribe un script el cual contenga una función que sea capaz de calcular los años que tiene una persona. A la función debe de pasarse la fecha de nacimiento de la persona y devolverá cuántos años tiene.
function ej1() {
    let fechaPersona = prompt("Dime la fecha de la persona (AÑO/MES/DÍA) y te diré su edad");
    while (fechaPersona === null) {
        fechaPersona = prompt("Su fecha no puede ser nula");
    }
    let fecha = null; // Inicializa la variable de fecha
    // Verifica si la fecha ingresada es válida
    while (fecha === null) {
        fecha = new Date(fechaPersona); // Crea un objeto Date a partir de la cadena
        // Verifica si la fecha es válida
        if (isNaN(fecha.getTime())) {
            fechaPersona = prompt("Su fecha es inválida, debe ir en este formato AÑO/MES/DÍA");
            if (fechaPersona === null)
                break; // Maneja cancelación
            fecha = null; // Reinicia fecha para que el bucle continúe
        }
    }
    if (fecha !== null) {
        const fechaActual = new Date();
        // Calcular la edad
        let edad = fechaActual.getFullYear() - fecha.getFullYear();
        const mes = fechaActual.getMonth() - fecha.getMonth();
        if (mes < 0 || (mes === 0 && fechaActual.getDate() < fecha.getDate())) {
            edad--;
        }
        // Validar si la edad es negativa
        const h1Ej1 = document.getElementById('h1-ej1');
        if (h1Ej1) {
            if (edad < 0) {
                h1Ej1.textContent = `La fecha ingresada es futura, por lo tanto la edad es negativa.`;
            }
            else {
                // Mostrar la edad en el elemento correspondiente
                h1Ej1.textContent = `La edad es: ${edad} años.`;
            }
        }
    }
}
// Agregar el evento al botón
(_a = document.getElementById('btn-ej1')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', ej1);
// Ejercicio 2
// Realiza un script que sea capaz de calcular los días que hay entre dos fechas. Siempre el número de días debe de ser positivo, ya que el usuario debe de introducir 2 fechas, da igual cual sea anterior a la otra, para que calcule la diferencia de días de ambas.
function ej2() {
    let fechaIni = prompt("Dime la fecha inicial");
    let fechaFin;
    if (fechaIni === null) {
        alert("No has ingresado ninguna fecha inicial. FIN PROGRAMA");
        return; // Terminar el programa si no se ingresa la fecha inicial
    }
    else {
        fechaFin = prompt("Dime la fecha final");
        if (fechaFin === null) {
            alert("No has ingresado ninguna fecha final. FIN PROGRAMA");
            return; // Terminar el programa si no se ingresa la fecha final
        }
        while (fechaIni === "" || fechaFin === "") {
            fechaIni = prompt("NO PUEDE SER NULA LA FECHA-INICIAL o VACÍA");
            fechaFin = prompt("NO PUEDE SER NULA LA FECHA-FINAL o VACÍA");
            // Chequear si las fechas son nulas después de la entrada
            if (fechaIni === null || fechaFin === null) {
                alert("No se pueden ingresar fechas nulas. FIN PROGRAMA");
                return;
            }
        }
    }
    let f1 = new Date(fechaIni);
    // Verificar que f1 es una fecha válida
    while (!(f1 instanceof Date && !isNaN(f1.getTime()))) {
        alert("Fecha inicial inválida. Por favor, ingresa una fecha válida.");
        fechaIni = prompt("Dime la fecha inicial");
        if (fechaIni === null) {
            alert("No has ingresado ninguna fecha inicial. FIN PROGRAMA");
            return; // Terminar el programa si no se ingresa la fecha inicial
        }
        f1 = new Date(fechaIni);
    }
    // Aquí puedes continuar con la lógica para fechaFin o el resto de tu programa
}
// Agregar el evento al botón
(_b = document.getElementById('btn-ej2')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', ej2);
