const divNorte = document.querySelector("div#norte");
const linea1;
const ej1 = () => {
    // Seleccionamos el <ul> con el id 'lista'
    const ul = document.querySelector('ul#lista');
    // // Modificar el texto del primer <li>
    // ul.children[0].textContent = "loquito";
    // Usar map para recorrer los elementos hijos de <ul>
    Array.from(ul.children).map((li, index) => {
        console.log(`Elemento ${index}: ${li.textContent}`);
        let texto = document.querySelector('div#texto');
        texto.textContent = divNorte.textContent + " " +
        ;
    });
};
// Asignar el evento al div con id 'norte'
divNorte.addEventListener('click', ej1);
