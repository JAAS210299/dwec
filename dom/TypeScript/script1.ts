const divNorte = document.querySelector("div#norte");
const divSur = document.querySelector("div#sur");
const texto = document.querySelector('div#texto');

const ej1 = (e) => {
    let region = "";
    let hijos = [];

    // Obtener el nodo clickeado
    let nodoClickado = e.target;

    // Verifica si el clic fue en el div o en alguno de sus hijos
    if (divNorte.contains(nodoClickado)) {
        region = 'norte';
        hijos = [...divNorte.querySelectorAll('li')].map(hijo => hijo.textContent);
        texto.innerHTML = `Has elegido ${divNorte.querySelector('h2').textContent} que está situado en el ${region}<br>
                           El número de provincias es ${hijos.length}: ${hijos.join(', ')}`;
    } else if (divSur.contains(nodoClickado)) {
        region = 'sur';
        hijos = [...divSur.querySelectorAll('li')].map(hijo => hijo.textContent);
        texto.innerHTML = `Has elegido ${divSur.querySelector('h2').textContent} que está situado en el ${region}<br>
                           El número de provincias es ${hijos.length}: ${hijos.join(', ')}`;
    }
}

document.body.addEventListener('click', ej1);

