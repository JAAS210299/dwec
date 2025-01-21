function llamadaServidor(numSegundos, callback) {
  setTimeout(() => {
      if (numSegundos > 4) {
          // Forzamos un error si el tiempo supera 4 segundos.
          const error = new Error(`La llamada al servidor ha tardado demasiado (${numSegundos} segundos).`);
          callback(error, null);
      } else {
          console.log(`Llamada al servidor de ${numSegundos * 1000} sg.`);
          callback(null, numSegundos * 1000);
      }
  }, numSegundos * 1000);
}

function manejarRespuesta(error, valor, mensaje) {
  if (error) {
      console.error(`Error: ${error.message}`);
      return;
  }
  console.log(`${mensaje} a tardado ${valor}`);
}

function ejecutarLlamadasAnidadas() {
  llamadaServidor(2, (error, valor1) => {
      manejarRespuesta(error, valor1, "La primera llamada");

      llamadaServidor(3, (error, valor2) => {
          manejarRespuesta(error, valor2, "La segunda llamada");

          llamadaServidor(5, (error, valor3) => { // Simulamos un tiempo mayor a 4 segundos.
              manejarRespuesta(error, valor3, "La tercera llamada");

              if (!error) {
                  console.log("Hemos terminado todo perfecto");
              } else {
                  console.log("Finalizamos con errores.");
              }
          });
      });
  });
}

window.onload = ejecutarLlamadasAnidadas;
