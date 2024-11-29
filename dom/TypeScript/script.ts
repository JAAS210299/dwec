const divNorte = document.querySelector("div#norte");

const ej1 = (e) => {
    // Verificar si el target es el elemento <h2>
    if (e.target.tagName === "H2" && e.target.textContent === "Galicia") {
        alert(e.target.textContent);  // Muestra el texto del <h2>
    }
    else if(e.target.tagName === "H2" && e.target.textContent === "Canarias"){
        alert(e.target.textContent);
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