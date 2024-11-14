// Ejercicio 1
// Escribe un script el cual contenga una función que sea capaz de calcular los años que tiene una persona. A la función debe de pasarse la fecha de nacimiento de la persona y devolverá cuántos años tiene.
function ej1() {
  let fechaPersonaString: string | null = prompt(
    "Dime la fecha de la persona (AÑO/MES/DÍA) y te diré su edad"
  );

  const h1Ej1: HTMLElement = document.getElementById("h1-ej1") as HTMLElement;
  const fechaActual: Date = new Date();



  if (fechaPersonaString) {
    const fechaPersona: Date = new Date(fechaPersonaString);
    
    if (fechaPersonaString === "") {
      h1Ej1.textContent = "No se puede dejar vacía la fecha";
    }
    
    if (fechaPersona.getFullYear() <= fechaActual.getFullYear()) {
      let edad = fechaActual.getFullYear() - fechaPersona.getFullYear();

      // Ajuste si la fecha actual es antes del cumpleaños de este año
      if (
        fechaActual.getMonth() < fechaPersona.getMonth() ||
        (fechaActual.getMonth() === fechaPersona.getMonth() && fechaActual.getDate() < fechaPersona.getDate())
      ) {
        edad--;
      }
     

      h1Ej1.textContent = `Tiene/s ${edad} año(s)`;
    } else {
      h1Ej1.textContent = "La fecha es en el futuro o no es válida";
    }
  }
 

  else {

      h1Ej1.textContent = "No es válida tu fecha";
  }
}


// Agregar el evento al botón
document.getElementById("btn-ej1")?.addEventListener("click", ej1);

// Ejercicio 2
// Realiza un script que sea capaz de calcular los días que hay entre dos fechas. Siempre el número de días debe de ser positivo, ya que el usuario debe de introducir 2 fechas, da igual cual sea anterior a la otra, para que calcule la diferencia de días de ambas.
function ej2() {
  let fechaIni: string | null = prompt("Dime la fecha inicial (AAAA-MM-DD)");
  let fechaFin: string | null;

  if (fechaIni === null) {
    alert("No has ingresado ninguna fecha inicial. FIN PROGRAMA");
    return;
  } else {
    fechaFin = prompt("Dime la fecha final (AAAA-MM-DD)");

    if (fechaFin === null) {
      alert("No has ingresado ninguna fecha final. FIN PROGRAMA");
      return;
    }

    while (fechaIni === "" || fechaFin === "") {
      fechaIni = prompt("NO PUEDE SER NULA LA FECHA-INICIAL o VACÍA");
      fechaFin = prompt("NO PUEDE SER NULA LA FECHA-FINAL o VACÍA");

      if (fechaIni === null || fechaFin === null) {
        alert("No se pueden ingresar fechas nulas. FIN PROGRAMA");
        return;
      }
    }
  }

  let f1: Date = new Date(fechaIni);
  let f2: Date = new Date(fechaFin);

  while (!(f1 instanceof Date && !isNaN(f1.getTime()))) {
    alert("Fecha inicial inválida. Por favor, ingresa una fecha válida.");
    fechaIni = prompt("Dime la fecha inicial (AAAA-MM-DD)");

    if (fechaIni === null) {
      alert("No has ingresado ninguna fecha inicial. FIN PROGRAMA");
      return;
    }

    f1 = new Date(fechaIni);
  }

  while (!(f2 instanceof Date && !isNaN(f2.getTime()))) {
    alert("Fecha final inválida. Por favor, ingresa una fecha válida.");
    fechaFin = prompt("Dime la fecha final (AAAA-MM-DD)");

    if (fechaFin === null) {
      alert("No has ingresado ninguna fecha final. FIN PROGRAMA");
      return;
    }

    f2 = new Date(fechaFin);
  }

  // Calcular la diferencia de días en valor absoluto
  const diferenciaEnMilisegundos = Math.abs(f2.getTime() - f1.getTime());
  const dias = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

  alert(`La diferencia entre ambas fechas es de ${dias} día(s).`);
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
  let input: string | null = prompt("Introduce una hora en formato HH:MM:SS AM/PM");

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
function ej4() {
  const menu: string | null = prompt(
    "Dime que quieres calcular:\n1. Potencia\n2. Raíz\n3. Redondeo\n4. Trigonometría"
  );

  switch (menu) {
    case '1':
      calcularPotencia();
      break;

    case '2':
      calcularRaiz();
      break;

    case '3':
      redondearNumero();
      break;

    case '4':
      calcularTrigonometria();
      break;

    default:
      alert("Opción no válida. Por favor elige una opción del menú.");
      break;
  }
}

function calcularPotencia() {
  const baseString: string | null = prompt('Dime la base:');
  const exponenteString: string | null = prompt('Dime el exponente:');

  if (baseString !== null && exponenteString !== null) {
    const base = parseFloat(baseString);
    const exponente = parseFloat(exponenteString);

    if (!isNaN(base) && !isNaN(exponente)) {
      const resultado = Math.pow(base, exponente);
      alert(`La potencia de ${base} elevado a ${exponente} es: ${resultado}`);
    } else {
      alert("Por favor, introduce valores numéricos válidos.");
    }
  }
}

function calcularRaiz() {
  const numeroString: string | null = prompt("Introduce un número no negativo:");

  if (numeroString !== null) {
    const numero = parseFloat(numeroString);

    if (numero < 0) {
      alert("Por favor, introduce un número no negativo.");
    } else {
      const resultado = Math.sqrt(numero);
      alert(`La raíz de ${numero} es: ${resultado}`);
    }
  }
}

function redondearNumero() {
  const decimalString: string | null = prompt("Introduce un número decimal:");

  if (decimalString !== null) {
    const numero = parseFloat(decimalString);

    if (!isNaN(numero)) {
      const redondeadoAlAlto = Math.ceil(numero);
      const redondeadoAlBajo = Math.floor(numero);
      const redondeado = Math.round(numero);
      alert(`El número ${numero} redondeado es: ${redondeado}\nAl alza: ${redondeadoAlAlto}\nA la baja: ${redondeadoAlBajo}`);
    } else {
      alert("Por favor, introduce un valor numérico válido.");
    }
  }
}

function calcularTrigonometria() {
  const anguloString: string | null = prompt("Introduce un ángulo entre 0 y 360 grados:");

  if (anguloString !== null) {
    const angulo = parseFloat(anguloString);

    if (angulo < 0 || angulo > 360) {
      alert("Por favor, introduce un ángulo entre 0 y 360 grados.");
    } else {
      const radianes = angulo * (Math.PI / 180); // Convertir grados a radianes
      const seno = Math.sin(radianes);
      const coseno = Math.cos(radianes);
      const tangente = Math.tan(radianes);
      alert(`Para el ángulo ${angulo}°:\nSeno: ${seno}\nCoseno: ${coseno}\nTangente: ${tangente}`);
    }
  }
}

document.getElementById("btn-ej4")?.addEventListener("click", ej4);


function ej5() {
  const radioString: string | null = prompt("Introduce el valor del radio (en cm):");

  if (radioString !== null) {
    const radio = parseFloat(radioString);

    if (!isNaN(radio) && radio > 0) {
      const diametro = 2 * radio;
      const perimetro = 2 * Math.PI * radio;
      const areaCirculo = Math.PI * Math.pow(radio, 2);
      const areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
      const volumenEsfera = (4 / 3) * Math.PI * Math.pow(radio, 3);

      alert(`Resultados:\n` +
        `Valor del radio: ${radio} cm\n` +
        `Valor del diámetro: ${diametro} cm\n` +
        `Valor del perímetro de la circunferencia: ${perimetro.toFixed(2)} cm\n` +
        `Valor del área del círculo: ${areaCirculo.toFixed(2)} cm²\n` +
        `Valor del área de la esfera: ${areaEsfera.toFixed(2)} cm²\n` +
        `Valor del volumen de la esfera: ${volumenEsfera.toFixed(2)} cm³`);
    } else {
      alert("Por favor, introduce un valor de radio válido (número positivo).");
    }
  }
}

// Iniciar el programa
document.getElementById("btn-ej5")?.addEventListener("click", ej5);


function ej6() {
  const nombreCompleto: string | null = prompt("Dime tu nombre completo:");

  if (nombreCompleto) {
    // Dividir el nombre completo en partes
    const nombreCompletoArray: string[] = nombreCompleto.trim().split(/\s+/);
    const sinEspacios: string = nombreCompleto.replace(/\s+/g, '');

    // Obtener los componentes del nombre y apellidos
    const nombre: string = nombreCompletoArray[0];
    const apellido1: string = nombreCompletoArray[1] || '';
    const apellido2: string = nombreCompletoArray[2] || '';

    // Calcular las propuestas de nombre de usuario
    const usuario1: string = nombre.charAt(0).toLowerCase() + apellido1.toLowerCase() + (apellido2.charAt(0)?.toLowerCase() || '');
    const usuario2: string = nombre.substring(0, 3).toLowerCase() + apellido1.substring(0, 3).toLowerCase() + apellido2.substring(0, 3).toLowerCase();

    // Crear el mensaje a mostrar
    const mensaje: string = `Tamaño del nombre más apellidos (sin contar espacios): ${sinEspacios.length}\n` +
      `En minúsculas: ${nombreCompleto.toLowerCase()}\n` +
      `En mayúsculas: ${nombreCompleto.toUpperCase()}\n` +
      `Nombre: ${nombre}\n` +
      `Apellido 1: ${apellido1}\n` +
      `Apellido 2: ${apellido2}\n` +
      `Propuesta de usuario 1: ${usuario1}\n` +
      `Propuesta de usuario 2: ${usuario2}`;

    // Mostrar el mensaje en un alert
    alert(mensaje);
  } else {
    alert("No has ingresado un nombre completo.");
  }
}

// Iniciar el programa
document.getElementById("btn-ej6")?.addEventListener("click", ej6);


function ej7() {
  // Array para almacenar los tiempos individuales
  let tiemposIndividuales: number[] = [];

  // Tiempo de inicio para el cálculo total
  const inicioTotal = performance.now();

  // Parámetros iniciales
  let pi = "3.";
  let k = 1;
  let a = 1n, b = 0n, c = 0n, d = 1n;

  for (let i = 0; i < 60; i++) {
    // Tiempo de inicio de cada iteración
    const inicioIteracion = performance.now();

    // Algoritmo de cálculo de decimales de PI (repetido para ampliar el tiempo de cálculo)
    for (let j = 0; j < 1000; j++) {  // Repetimos el cálculo 1000 veces
      while (4n * a + b - c < d) {
        b = 10n * (b - a * d);
        a *= 10n;
        k++;
        c = (2n * b + a) / d;
        d *= BigInt(k); // Convierte `k` a BigInt antes de multiplicar
      }
    }

    pi += c.toString();

    // Tiempo de finalización de cada iteración
    const finIteracion = performance.now();
    tiemposIndividuales.push(finIteracion - inicioIteracion); // Guarda el tiempo individual
  }

  // Tiempo de finalización para el cálculo total
  const finTotal = performance.now();

  // Genera el mensaje para el alert
  let mensaje = "Tiempo total para calcular 60 decimales de PI: " + (finTotal - inicioTotal).toFixed(2) + " ms\n\n";
  mensaje += "Tiempos individuales para cada decimal:\n";
  tiemposIndividuales.forEach((tiempo, index) => {
    mensaje += "Decimal " + (index + 1) + ": " + tiempo.toFixed(2) + " ms\n";
  });

  // Muestra el mensaje en un alert
  alert(mensaje);
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
function ej9() {
  let email: string | null = prompt("Dime tu correo electrónico y lo válido");
  const regExp: RegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if (email && email !== "") {
    if (!regExp.test(email)) {
      alert("Su corrreo: " + email + " ¡ES INVÁLIDO!");
    } else {
      alert("Su correo: " + email + " ¡ES VÁLIDO!");
    }
  }
}
document.getElementById("btn-ej9")?.addEventListener("click", ej9);

// Ejercicio 10
// En el siguiente enlace podemos ver una serie de expresiones regulares las cuales validan diferentes formatos de tarjetas de crédito. Trata de explicar cada una de las expresiones regulares (desgrana la expresión) y explica la función de cada uno de los componentes de las mismas (especialmente fíjate en la última que es capaz de aunar en una sola expresión regular la validación de diferentes tarjetas de crédito en una sola expresión).  ¡¡¡Que se queden bien explicadas !!!
// → Enlace: http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=cc
function ej10() {

  const h1Ej10: HTMLElement = document.getElementById("h1-ej10") as HTMLElement;
  h1Ej10.textContent = "Expresiones regulares para validar tarjetas de crédito:\n\n" +
    "^3(?:0[0-5]|[68][0-9])[0-9]{11}$: Tarjetas JCB que comienzan con 30, 31, 32, 33, 34, 35 o 36 y tienen un total de 16 dígitos.\n" +
    "^6(?:011|5[0-9]{2})[0-9]{12}$: Tarjetas Discover que comienzan con 6011 o 5 seguido de 2 dígitos del 0 al 9 y tienen un total de 16 dígitos.\n" +
    "5[1-5][0-9]{14}$: Tarjetas MasterCard que comienzan con un número entre 51 y 55 y tienen un total de 16 dígitos.\n" +
    "^3[47][0-9]{13}$: Tarjetas American Express que comienzan con 34 o 37 y tienen un total de 15 dígitos.\n" +
    "^(?:4\\d([\\- ])?\\d{6}\\1\\d{5}|(?:4\\d{3}|5[1-5]\\d{2}|6011)([\\- ])?\\d{4}\\2\\d{4}\\2\\d{4})$: Tarjetas Visa que pueden contener guiones y tienen un total de 13 o 16 dígitos.";
}
document.getElementById("btn-ej10")?.addEventListener("click", ej10);
