document.addEventListener('keydown', (event) => {
    const div = document.getElementById('prueba');
  
    switch (event.key.toLowerCase()) {
      case 'b':
        div.className = 'blanco'; // Asigna la clase "blanco"
        break;
      case 'r':
        div.className = 'rojo'; // Asigna la clase "rojo"
        break;
      case 'a':
        div.className = 'amarillo'; // Asigna la clase "amarillo"
        break;
      default:
        break;
    }
  });
  