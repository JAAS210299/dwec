document.addEventListener("DOMContentLoaded", () => {
    const asientos = document.querySelectorAll(".fila .asiento:not(.ocupado)");
    const contador = document.getElementById("numero");
    const total = document.getElementById("total");
    const precioPelicula = document.getElementById("pelicula");

    // Cargar datos almacenados en localStorage
    function cargarDatos() {
        const asientosSeleccionados = JSON.parse(localStorage.getItem("asientosSeleccionados")) || [];
        asientos.forEach((asiento, index) => {
            if (asientosSeleccionados.includes(index)) {
                asiento.classList.add("seleccionado");
            }
        });

        // Actualizar contadores al cargar
        actualizarSeleccion();
    }

    // Guardar asientos seleccionados en localStorage
    function guardarDatos() {
        const asientosSeleccionados = [...document.querySelectorAll(".fila .asiento.seleccionado")];
        const indicesSeleccionados = asientosSeleccionados.map(asiento => [...asientos].indexOf(asiento));
        localStorage.setItem("asientosSeleccionados", JSON.stringify(indicesSeleccionados));
    }

    // Actualizar la cantidad y precio de asientos seleccionados
    function actualizarSeleccion() {
        const asientosSeleccionados = document.querySelectorAll(".fila .asiento.seleccionado");
        contador.textContent = asientosSeleccionados.length;
        total.textContent = asientosSeleccionados.length * parseInt(precioPelicula.value);
        
        guardarDatos(); // Guardar en localStorage cada vez que cambia
    }

    // Evento para seleccionar asientos
    asientos.forEach(asiento => {
        asiento.addEventListener("click", () => {
            asiento.classList.toggle("seleccionado");
            actualizarSeleccion();
        });
    });

    // Evento para actualizar precio al cambiar la película
    precioPelicula.addEventListener("change", actualizarSeleccion);

    // Cargar datos almacenados al iniciar
    cargarDatos();
});
