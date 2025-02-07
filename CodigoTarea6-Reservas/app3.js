document.addEventListener("DOMContentLoaded", () => {
    const asientos = document.querySelectorAll(".fila .asiento:not(.ocupado)");
    const contador = document.getElementById("numero");
    const total = document.getElementById("total");
    const precioPelicula = document.getElementById("pelicula");

    // Abrir la base de datos IndexedDB
    let db;
    const request = indexedDB.open("reservasDB", 1);

    request.onsuccess = (event) => {
        db = event.target.result;
        cargarDatos();
    };

    request.onupgradeneeded = (event) => {
        db = event.target.result;
        const objectStore = db.createObjectStore("reservas", { keyPath: "pelicula" });
        objectStore.createIndex("pelicula", "pelicula", { unique: true });
    };

    // Función para cargar los datos de los asientos reservados
    function cargarDatos() {
        const transaction = db.transaction(["reservas"], "readonly");
        const objectStore = transaction.objectStore("reservas");
        const peliculaSeleccionada = precioPelicula.value;

        const request = objectStore.get(peliculaSeleccionada);

        request.onsuccess = (event) => {
            const asientosSeleccionados = event.target.result ? event.target.result.asientos : [];

            asientos.forEach((asiento, index) => {
                if (asientosSeleccionados.includes(index)) {
                    asiento.classList.add("seleccionado");
                }
            });

            // Actualizar contadores al cargar
            actualizarSeleccion();
        };
    }

    // Función para guardar los datos de los asientos reservados
    function guardarDatos() {
        const transaction = db.transaction(["reservas"], "readwrite");
        const objectStore = transaction.objectStore("reservas");

        const asientosSeleccionados = [...document.querySelectorAll(".fila .asiento.seleccionado")];
        const indicesSeleccionados = asientosSeleccionados.map(asiento => [...asientos].indexOf(asiento));
        const peliculaSeleccionada = precioPelicula.value;

        const request = objectStore.put({
            pelicula: peliculaSeleccionada,
            asientos: indicesSeleccionados
        });

        request.onsuccess = () => {
            console.log("Datos guardados en IndexedDB");
        };
    }

    // Función para actualizar la cantidad y precio de asientos seleccionados
    function actualizarSeleccion() {
        const asientosSeleccionados = document.querySelectorAll(".fila .asiento.seleccionado");
        contador.textContent = asientosSeleccionados.length;
        total.textContent = asientosSeleccionados.length * parseInt(precioPelicula.value);

        guardarDatos(); // Guardar en IndexedDB cada vez que cambia
    }

    // Evento para seleccionar asientos
    asientos.forEach(asiento => {
        asiento.addEventListener("click", () => {
            asiento.classList.toggle("seleccionado");
            actualizarSeleccion();
        });
    });

    // Evento para actualizar precio al cambiar la película
    precioPelicula.addEventListener("change", cargarDatos);

    // Cargar datos almacenados al iniciar
    cargarDatos();
});
