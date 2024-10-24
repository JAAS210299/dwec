// Ejercicio 1
// Escribe un script el cual contenga una función que sea capaz de calcular los años que tiene una persona. A la función debe de pasarse la fecha de nacimiento de la persona y devolverá cuántos años tiene.
function ej1() {
  let fechaPersona: string | null = prompt(
    "Dime la fecha de la persona (AÑO/MES/DÍA) y te diré su edad"
  );

  while (fechaPersona === null) {
    fechaPersona = prompt("Su fecha no puede ser nula");
    
  }

  let fecha: Date | null = null; // Inicializa la variable de fecha

  // Verifica si la fecha ingresada es válida
  while (fecha === null) {
    fecha = new Date(fechaPersona); // Crea un objeto Date a partir de la cadena

    // Verifica si la fecha es válida
    if (isNaN(fecha.getTime())) {
      fechaPersona = prompt(
        "Su fecha es inválida, debe ir en este formato AÑO/MES/DÍA"
      );
      if (fechaPersona === null) break; // Maneja cancelación
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
    const h1Ej1: HTMLElement = document.getElementById("h1-ej1") as HTMLElement;
    if (h1Ej1) {
      if (edad < 0) {
        h1Ej1.textContent = `La fecha ingresada es futura, por lo tanto la edad es negativa.`;
      } else {
        // Mostrar la edad en el elemento correspondiente
        h1Ej1.textContent = `La edad es: ${edad} años.`;
      }
    }
  }
}

// Agregar el evento al botón
document.getElementById("btn-ej1")?.addEventListener("click", ej1);

// Ejercicio 2
// Realiza un script que sea capaz de calcular los días que hay entre dos fechas. Siempre el número de días debe de ser positivo, ya que el usuario debe de introducir 2 fechas, da igual cual sea anterior a la otra, para que calcule la diferencia de días de ambas.
function ej2() {
  let fechaIni: string | null = prompt("Dime la fecha inicial");
  let fechaFin: string | null;

  if (fechaIni === null) {
    alert("No has ingresado ninguna fecha inicial. FIN PROGRAMA");
    return; // Terminar el programa si no se ingresa la fecha inicial
  } else {
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

  let f1: Date = new Date(fechaIni);

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
document.getElementById("btn-ej2")?.addEventListener("click", ej2);

// Ejercicio 3
// Crea un programa que muestre la hora en diferentes formatos, según el valor que meta el usuario por parámetro: los parámetros que debe introducir el usuario son la hora, los minutos, los segundos.
// 14:35:07 (hora detallada con minutos y segundos).
// 14:35:07 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día).
function ej3() {
  // Expresión regular tipada con el tipo RegExp en TypeScript
  const regex: RegExp = /^(0[1-9]|1[0-2]):([0-5]\d):([0-5]\d) ?([APap][Mm])$/;

  // Pedir al usuario que ingrese una hora en formato HH:MM:SS
  let input: string | null = prompt("Introduce una hora en formato HH:MM:SS:");

  // Verificar si el input cumple con el formato
  if (input && regex.test(input)) {
    alert("Formato correcto: " + input);
  } else {
    alert("Formato incorrecto. Debes usar HH:MM:SS en formato 24 horas.");
  }
}
document.getElementById("btn-ej3")?.addEventListener("click", ej3);

// Crea un programa que pida al usuario que elija una opción del siguiente menú:
// Potencia.
// Raíz.
// Redondeo.
// Trigonometría.
// Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )
// Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )
// Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.
// Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente.
// function ej4() {
//   const menu: string | null = prompt(
//     "Dime que quieres calcular: 1-POTENCIA, 2-RAÍZ 3-REDONDEO 3-RAÍZ"
//   );


//   switch (menu) {
//     case '1':
//         const base: string | null = prompt('Dime la base');
//         const exponente: string | null = prompt('Dime el exponente');
//         const regex: RegExp = /^\d+$/;

//         while(base || base != '' && exponente || exponente != '' && regex.test(base)){
            
//         }
       
//       break;

//     case '2':
//       break;

//     case '3':
//       break;

//     case '4':
//       break;

//     default:
//       break;
//   }
// }
// document.getElementById("btn-ej4")?.addEventListener("click", ej4);

// Ejercicio 5
// Crea un programa que pida al usuario el valor del radio y muestre por pantalla:
// El valor del radio.
// El valor del diámetro.
// El valor del perímetro de la circunferencia.
// El valor del área del círculo.
// El valor del área de la esfera.
// El valor del volumen de la esfera.
// • El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
// • Debes escribir al lado si son cm, o cm2, ó cm3.
// • Como datos de muestra, si metes 5, deberías obtener aproximadamente: 5 / 10 / 31,41 / 78,54 / 314,15 / 523,59.   (sin incluir las unidades)
function ej5(){

}
document.getElementById("btn-ej5")?.addEventListener("click", ej5);
// Ejercicio 6
// Crea un programa que pida al usuario su nombre y apellidos y muestre:
// El tamaño del nombre más los apellidos (sin contar espacios).
// La cadena en minúsculas y en mayúsculas.
// Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido 1: / Apellido 2: y además, 
// Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para Laura Folgado Galache sería lfolgadog.
// Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los dos apellidos: ej. Laufolgal.
function ej6(){

}
document.getElementById("btn-ej6")?.addEventListener("click", ej6);

// Ejercicio 7
// El objetivo de esta actividad es calcular el tiempo que tarda un script en ejecutarse. Para ello, utilizaremos el objeto Date , el cual tiene precisión de milisegundos.
// En el siguiente enlace tenéis un algoritmo para encontrar los decimales de PI que es fácil de reutilizar en su código. 
// Debe de mostrar cuánto tiempo tarda en calcular los primeros 60 decimales de PI. 
// Para ello debe de tomar/mostrar dos tipos de cálculos: el primero, que calculará cuánto tiempo tarda en calcularse el total de los 60 cálculos (decimales).  Y luego calcular/mostrar cuánto tarda cada cálculo  (calcular cuánto tarda en calcular el primero, el segundo, etc. y así iremos viendo que cada vez le cuesta más (aunque el algoritmo es muy rápido)). Para calcular los tiempos de cada cálculo, deberá investigar un poco el código y ver en qué línea del código debería usted de hacer esos cálculos. El debugger puede ayudar mucho en determinar la porción del código donde debe calcular los tiempos. 
// → http://p-nand-q.com/programming/obfuscation/js/index.html 
function ej7() {

}
document.getElementById("btn-ej7")?.addEventListener("click", ej7);

// Ejercicio 8
// Haciendo uso de expresiones regulares, cómo podrías obtener del siguiente texto “Test 123123329” sólo el número. Es decir, poder acceder al valor del número de este texto. Además, debe de seleccionar el método más apropiado que de alguna forma devuelva o almacene el número buscado. 
function ej8() {
  let texto: string = "Test 123123329";
  const str: string = "123123329";
  const regex: RegExp = new RegExp(str); // Convertir la cadena a una expresión regular
  const salida: String[] | null = texto.match(regex); // Usar la expresión regular

  if (salida) {
    alert("Coincidencia encontrada: " + salida[0]);
  } else {
    alert("No se encontró ninguna coincidencia.");
  }
}
document.getElementById("btn-ej8")?.addEventListener("click", ej8);


// Ejercicio 9
// Haciendo uso de expresiones regulares, valida el formato de un email. Como este ejercicio es muy fácil, te pido que detalles/expliques cada uno de los elementos que has utilizado en la expresión regular para conseguir la validación. 
function ej9(){
  let email:string|null = prompt("Dime tu correo electrónico y lo válido");
  const regExp: RegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if(email && email !== ""){
    if(!regExp.test(email)){
      alert("Su corrreo: " + email + " ¡ES INVÁLIDO!");
    }
    else{
      alert("Su correo: " + email + " ¡ES VÁLIDO!")
    }
  }
}
document.getElementById("btn-ej9")?.addEventListener("click", ej9);

// Ejercicio 10
// En el siguiente enlace podemos ver una serie de expresiones regulares las cuales validan diferentes formatos de tarjetas de crédito. Trata de explicar cada una de las expresiones regulares (desgrana la expresión) y explica la función de cada uno de los componentes de las mismas (especialmente fíjate en la última que es capaz de aunar en una sola expresión regular la validación de diferentes tarjetas de crédito en una sola expresión).  ¡¡¡Que se queden bien explicadas !!!
// → Enlace: http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=cc 
function ej10() {

}
document.getElementById("btn-ej10")?.addEventListener("click", ej10);
