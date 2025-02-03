const contenedor = document.querySelector(".contenedor");
const asientos = document.querySelectorAll(".fila .asiento:not(.ocupado)");
const selectPelicula = document.getElementById("pelicula");
const numero = document.getElementById("numero");
const total = document.getElementById("total");

// Botones de "Libre" y "Ocupado"
const btnLibre = document.querySelector(".mostrador li:nth-child(1) .asiento");
const btnOcupado = document.querySelector(".mostrador li:nth-child(3) .asiento");

function actualizarSeleccion() {
    const asientosSeleccionados = document.querySelectorAll(".fila .asiento.seleccionado");
    const cantidad = asientosSeleccionados.length;
    const precio = selectPelicula.value;
    
    numero.textContent = cantidad;
    total.textContent = cantidad * precio;
}

// Alternar selección de asientos
contenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("asiento") && !e.target.classList.contains("ocupado")) {
        e.target.classList.toggle("seleccionado");
        actualizarSeleccion();
    }
});

// Marcar todos los asientos como "Libre"
btnLibre.addEventListener("click", () => {
    document.querySelectorAll(".fila .asiento").forEach(asiento => {
        asiento.classList.remove("ocupado", "seleccionado");
    });
    actualizarSeleccion();
});

// Marcar todos los asientos como "Ocupado"
btnOcupado.addEventListener("click", () => {
    document.querySelectorAll(".fila .asiento").forEach(asiento => {
        asiento.classList.add("ocupado");
        asiento.classList.remove("seleccionado");
    });
    actualizarSeleccion();
});

selectPelicula.addEventListener("change", actualizarSeleccion);
document.addEventListener("DOMContentLoaded", actualizarSeleccion);
