function procesarTexto(): void {
    // Contar palabras
    const parrafos: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('p');
    let contadorPalabras: number = 0;

    parrafos.forEach((parrafo: HTMLParagraphElement) => {
        const palabras: string[] = parrafo.innerText.split(' ');
        contadorPalabras += palabras.length;
    });

    // Mostrar el número de palabras
    const contadorElement: HTMLElement | null = document.getElementById('contador-palabras');
    if (contadorElement) {
        contadorElement.innerText = `Número de palabras: ${contadorPalabras}`;
    }

    // Resaltar palabras mayores de 7 letras
    const resaltarPalabras = (texto: string): string => {
        return texto.split(' ').map((palabra: string) => {
            if (palabra.length > 7) {
                return `<span class="resaltado">${palabra}</span>`;
            }
            return palabra;
        }).join(' ');
    };

    parrafos.forEach((parrafo: HTMLParagraphElement) => {
        parrafo.innerHTML = resaltarPalabras(parrafo.innerHTML);
    });
}

// Llamar a la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', procesarTexto);