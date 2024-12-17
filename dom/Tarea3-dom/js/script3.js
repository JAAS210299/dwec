function manejarEvento(event) {
    const texto = document.getElementById('texto');

    // Manejo del evento mouseover y mouseout
    if (event.type === 'mouseover') {
        texto.style.color = 'red'; // Cambiar a rojo
    } else if (event.type === 'mouseout') {
        texto.style.color = 'black'; // Volver a negro
    }

    // Manejo del evento click para los botones
    if (event.type === 'click') {
        alert('El id del botón es: ' + event.target.id);
    }
}

// Asignamos los eventos
const texto = document.getElementById('texto');
texto.addEventListener('mouseover', manejarEvento);
texto.addEventListener('mouseout', manejarEvento);

const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
boton1.addEventListener('click', manejarEvento);
boton2.addEventListener('click', manejarEvento);