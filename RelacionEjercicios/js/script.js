// Ejercicio 1
// Crear un array con los valores:  [0,7,2,3,4,2,6,2,8,2].  Luego borrar las componentes donde hay un 2 y en dichas posiciones, al mismo tiempo insertar 2 elementos con el valor 1. Es decir, cada vez que se encuentre un 2, lo borras y los sustituyes por 2 posiciones en el array conteniendo ambas el valor 1.
// El resultado tendría que ser:    [0,7,1,1,3,4,1,1,6,1,1,8,1,1]
// Debes de hacer uso del método splice tanto para el borrado como para insertar.

//Declaración de variables
function ej1() {
  let array1 = [0, 7, 2, 3, 4, 2, 6, 2, 8, 2];
  for (let i = array1.length - 1; i >= 0; i--) {
    if (array1[i] === 2) {
      array1.splice(i, 1, 1, 1);
    }
  }
  let textEj1 = document.getElementById("h1-ej1");

  textEj1.textContent = array1;

  console.log(array1); // [0, 7, 1, 1, 3, 4, 1, 1, 6, 1, 1, 8, 1, 1]
}
document.getElementById("btn-ej1").addEventListener("click", ej1);

// Ejercicio 2
// Crear un vector de 10 elementos con valores “aleatorios” comprendidos entre 0 y 1000. Buscar el menor y luego generar otro vector a partir de dicha posición hasta el final.  Para manipular el vector debes de hacer uso de la función “slice”. También debes de buscar por internet como generar números random en javascript comprendidos en un rango determinado.
function ej2() {
  let array2 = [];
  let array3 = [];
  let arrayAux = [];
  let min = 0;
  for (let index = 0; index < 10; index++) {
    array2.push(Math.floor(Math.random() * 1001));
    min = Math.min(min, index);
  }

  for (let index = 0; index < array2.length; index++) {
    array3.push(array2[min]);
    min++;
  }
  
  console.log(array2);

  let textEj2 = document.getElementById("h1-ej2");

  textEj2.textContent =
    "Números aleatorios: del 0 al 1000: " +
    array2 +
    " Números mayores al menor: " +
    array3;
}
document.getElementById("btn-ej2").addEventListener("click", ej2);

// Ejercicio 3
// Escribe una función capaz de fusionar 2 arrays y que elimine todos los elementos duplicados.
// Datos de ejemplo:
/*
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
const array = Array.from(new Set(array1.concat(array2)));

console.log(array);
*/
// console.log(  fusionarArrays( array1 ,  array2));

// Salida:      [3, 2, 30, 1]

// Ejercicio 4 - DNI
// El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionandola dentro de un array de letras.
// El array de letras es:
function ej3() {
  let letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];

  let nDNI = prompt("Ingresa el número de tu DNI");
   let text = document.getElementById("h1-ej3");

   nDNI = parseInt(nDNI);
   text.textContent = "Su letra de DNI es: " + letras[nDNI % 23];
}
document.getElementById("btn-ej3").addEventListener("click", ej3);

// Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A.
// Con estos datos, elaborar un pequeño script que:
// 1. Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que indique su número y su letra, se puede utilizar la función prompt())
// 2. En primer lugar (y en una sola instrucción) se debe comprobar si el número es mayor que 0 o menor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
// 3. Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
// 4. Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.

// Ejercicio 4 - DNI
// El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionandola dentro de un array de letras.
// El array de letras es:
// let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A.
// Con estos datos, elaborar un pequeño script que:
// 1. Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que indique su número y su letra, se puede utilizar la función prompt())
// 2. En primer lugar (y en una sola instrucción) se debe comprobar si el número es mayor que 0 o menor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
// 3. Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
// 4. Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.

// Ejercicio 5
// Realiza las siguientes operaciones con un vector/array:
// Crear un array con los siguientes elementos:  “Sandía” y “Melón”.
// Añade “Kiwi” al final del array.
// Reemplaza el valor justo en la mitad del array por “Melocotón”. Ten cuidado porque el código para encontrar el elemento del medio debería de funcionar para arrays de cualquier tamaño.
// Saca el primer elemento del vector y muestralo (el valor será eliminado del vector).
// Añade por el principio “Pera”.
// Muestra todo el vector.
// Muestra todo el vector ordenado alfabéticamente.

// Ejercicio 6 - Código de rotación
// El objetivo de esta actividad es utilizar alguna de las funciones predefinidas del lenguaje JavaScript. Puede utilizar las funciones: chat, indexOf, alert, length, prompt y toUpperCase.
// El dictador Julio César utilizaba un código cuando quería mantener en secreto un mensaje. El cifrado consistía en sustituir la primera letra del alfabeto (A) por la cuarta (D) y así sucesivamente con las otras, es decir, B, por la quinta (I) la tercera (C) para la sexta (F ) ...
// El alfabeto latino que utilizaba Julio César constaba de 21 letras, por lo tanto la sustitución de letras para cifrar o descifrar mensajes queda descrita como sigue:
// Alfabeto original: ABCDEFGHIKLMNOPQRSTV
// Alfabeto cifrado: DEFGHIKLMNOPQRSTVABC
// Este tipo de cifrado es un código de rotación, donde la clave de rotación es 3. Escribe un programa que permita cifrar utilizando un código de rotación.

// Ejercicio 7 - Juego de los animales
// En esta actividad debe codificar una web HTML junto a un script donde realizaremos un pequeño juego en el que se pregunta al usuario a qué especie pertenece cada animal.
// 1º. Se define en un array una lista de animales, y en otro array la lista de la clase a la que pertenecen los animales del primer array: mamíferos, pájaros, anfibios, reptiles, peces. Ambos arrays tienen el mismo número de elementos.
// 2º. Seguidamente definirá un bucle, y en cada pase del bucle se pregunta al usuario a qué clase pertenece el animal, escogido de forma aleatoria.
// 3º. Debe haber un contador de preguntas contestadas, otro de preguntas correctas y otro de preguntas incorrectas.
// 4º. También debe implementar alguna condición/mecanismo de salida del bucle.
