function ej2() {
    // Obtener todos los enlaces de la página
    const enlaces = Array.from(document.getElementsByTagName('a'));
    // Crear un elemento <ul> para mostrar los resultados
    const resultadosUl = document.createElement('ul');
    // 1. Número de enlaces de la página
    const numeroDeEnlaces = enlaces.length;
    const liNumeroDeEnlaces = document.createElement('li');
    liNumeroDeEnlaces.textContent = `Número de enlaces de la página: ${numeroDeEnlaces}`;
    resultadosUl.appendChild(liNumeroDeEnlaces);
    // 2. Dirección a la que enlaza el penúltimo enlace
    if (numeroDeEnlaces > 1) {
        const penultimoEnlace = enlaces[numeroDeEnlaces - 2].href;
        const liPenultimoEnlace = document.createElement('li');
        liPenultimoEnlace.textContent = `Dirección a la que enlaza el penúltimo enlace: ${penultimoEnlace}`;
        resultadosUl.appendChild(liPenultimoEnlace);
    }
    else {
        const liNoPenultimo = document.createElement('li');
        liNoPenultimo.textContent = "No hay suficientes enlaces para obtener el penúltimo.";
        resultadosUl.appendChild(liNoPenultimo);
    }
    // 3. Número de enlaces que enlazan a http://prueba/
    const enlacesPrueba = enlaces.filter(enlace => enlace.href === 'http://prueba').length;
    const liEnlacesPrueba = document.createElement('li');
    liEnlacesPrueba.textContent = `Número de enlaces que enlazan a http://prueba/: ${enlacesPrueba}`;
    resultadosUl.appendChild(liEnlacesPrueba);
    // 4. Número de enlaces del tercer párrafo
    const tercerParrafo = document.getElementsByTagName('p')[2]; // El índice 2 es el tercer párrafo
    if (tercerParrafo) {
        const enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a').length;
        const liEnlacesTercerParrafo = document.createElement('li');
        liEnlacesTercerParrafo.textContent = `Número de enlaces del tercer párrafo: ${enlacesTercerParrafo}`;
        resultadosUl.appendChild(liEnlacesTercerParrafo);
    }
    else {
        const liNoTercerParrafo = document.createElement('li');
        liNoTercerParrafo.textContent = "No se encontró el tercer párrafo.";
        resultadosUl.appendChild(liNoTercerParrafo);
    }
    // Agregar la lista de resultados al cuerpo del documento
    document.body.appendChild(resultadosUl);
}
// Llamar a la función para ejecutar el ejercicio
ej2();
