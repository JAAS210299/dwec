// Ejercicio 1
// Crear un array con los valores:  [0,7,2,3,4,2,6,2,8,2].  Luego borrar las componentes donde hay un 2 y en dichas posiciones, al mismo tiempo insertar 2 elementos con el valor 1. Es decir, cada vez que se encuentre un 2, lo borras y los sustituyes por 2 posiciones en el array conteniendo ambas el valor 1.
// El resultado tendría que ser:    [0,7,1,1,3,4,1,1,6,1,1,8,1,1]
// Debes de hacer uso del método splice tanto para el borrado como para insertar.

//Declaración de variables
/*
let array1 = [0, 7, 2, 3, 4, 2, 6, 2, 8, 2];
for (let i = array.length - 1; i >= 0; i--) {
  if (array1[i] === 2) {
    array1.splice(i, 1, 1, 1);
  }
}

console.log(array1); // [0, 7, 1, 1, 3, 4, 1, 1, 6, 1, 1, 8, 1, 1]
*/

// Ejercicio 2
// Crear un vector de 10 elementos con valores “aleatorios” comprendidos entre 0 y 1000. Buscar el menor y luego generar otro vector a partir de dicha posición hasta el final.  Para manipular el vector debes de hacer uso de la función “slice”. También debes de buscar por internet como generar números random en javascript comprendidos en un rango determinado. 
/*let array2 =[];
for (let index = 0; index < 10; index++) {
    array2.push(Math.floor(Math.random()*1001));
    
}
console.log(array2);
*/



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
// let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A.
// Con estos datos, elaborar un pequeño script que:
// 1. Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que indique su número y su letra, se puede utilizar la función prompt())
// 2. En primer lugar (y en una sola instrucción) se debe comprobar si el número es mayor que 0 o menor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
// 3. Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
// 4. Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
