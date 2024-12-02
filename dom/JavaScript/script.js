const divNorte = document.querySelector("div#norte");
const divSur = document.querySelector("div#sur");
const texto = document.querySelector('div#texto');
const ej1 = (e) => {
    let region = "";
    let hijos = [];
    // Verifica si el clic fue en el div o en alguno de sus hijos
    if (divNorte.contains(e.target)) {
        region = 'norte';
        hijos = [...divNorte.querySelectorAll('li')].map(hijo => hijo.textContent);
        texto.innerHTML = `Has elegido ${divNorte.querySelector('h2').textContent} que está situado en el ${region}<br>
                           El número de provincias es ${divNorte.childNode.childElementCount}: ${hijos.join(', ')}`;
    }
    else if (divSur.contains(e.target)) {
        region = 'sur';
        hijos = [...divSur.querySelectorAll('li')].map(hijo => hijo.textContent);
        texto.innerHTML = `Has elegido ${divSur.querySelector('h2').textContent} que está situado en el ${region}<br>
                           El número de provincias es ${divSur.childElementCount}: ${hijos.join(', ')}`;
    }
};
document.body.addEventListener('click', ej1);
// // // Seleccionamos el <ul> con el id 'lista'
// // const ul = document.querySelector('ul#lista') as HTMLUListElement;
// // // // Modificar el texto del primer <li>
// // // ul.children[0].textContent = "loquito";
// // // Usar map para recorrer los elementos hijos de <ul>
// // Array.from(ul.children).map((li: HTMLLIElement, index: number) => {
// //     console.log(`Elemento ${index}: ${li.textContent}`);
// //     let texto = document.querySelector('div#texto');
// //     texto.textContent = divNorte.textContent + " " + 
// // });
