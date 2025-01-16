const ej1 = () => {};

function llamadaServidor(numSegundos, callback) {
  setTimeout(function () {
    console.log(`Llamada al servidor de ${numSegundos} sg.`);
  }, numSegundos);
}
