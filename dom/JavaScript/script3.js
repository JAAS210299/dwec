function procesarTexto() {
    // Contar palabras
    const parrafos = document.querySelectorAll('p');
    let contadorPalabras = 0;
    parrafos.forEach((parrafo) => {
        const palabras = parrafo.innerText.split(' ');
        contadorPalabras += palabras.length;
    });
    // Mostrar el número de palabras
    const contadorElement = document.getElementById('contador-palabras');
    if (contadorElement) {
        contadorElement.innerText = `Número de palabras: ${contadorPalabras}`;
    }
    // Resaltar palabras mayores de 7 letras
    const resaltarPalabras = (texto) => {
        return texto.split(' ').map((palabra) => {
            if (palabra.length > 7) {
                return `<span class="resaltado">${palabra}</span>`;
            }
            return palabra;
        }).join(' ');
    };
    parrafos.forEach((parrafo) => {
        parrafo.innerHTML = resaltarPalabras(parrafo.innerHTML);
    });
}
// Llamar a la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', procesarTexto);
