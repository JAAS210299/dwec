const llamandoAPI = async () => {
  try {
    const respuesta = await fetch("http://127.0.0.1:3000/perras");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};

llamandoAPI();

// CAMBIO DE MONEDA CON MONTO INCLUIDO
// https://v6.exchangerate-api.com/v6/3c2fe95af7bec6d9be69ca76/pair/EUR/GBP/AMOUNT
const cambioDeMoneda = async (monedaOrigen, monedaDestino, monto) => {
  try {
    const respuesta = await fetch(`https://v6.exchangerate-api.com/v6/3
      c2fe95af7bec6d9be69ca76/pair/${monedaOrigen}/${monedaDestino}/${monto}`);
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};
cambioDeMoneda("EUR", "GBP", 100);
