// Obtener la tasa de cambio desde el servidor local utilizando Axios
async function fetchExchangeRate() {
  const fromCurrency = document.getElementById("currency-one").value;
  const toCurrency = document.getElementById("currency-two").value;
  const amount = document.getElementById("amount-one").value;

  // Verificar que el valor ingresado es un número
  if (isNaN(amount)) {
    alert("Por favor, ingresa una cantidad válida.");
    toCurrency = "";
    return;
  }
  else if(amount === 0){
    toCurrency = 0;
  } else if (amount < 0) {
    alert("No puede haber cambio para valores negativos");
    document.getElementById("amount-one").value = 0;  // Establecer amount en 0
    return;
  }

  try {
    const response = await axios.get(`http://127.0.0.1:3001/rate`, {
      params: {
        from: fromCurrency,
        to: toCurrency
      }
    });

    if (response.data && response.data.rate) {
      const exchangeRate = response.data.rate;
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      document.getElementById("amount-two").value = convertedAmount;
    } else {
      alert("Error al obtener la tasa de cambio.");
    }
  } catch (error) {
    console.error("Error al llamar a la API:", error);
    alert("Error al convertir la moneda.");
  }
}

// Cambiar las monedas seleccionadas
function swapCurrencies() {
  const currencyOne = document.getElementById("currency-one");
  const currencyTwo = document.getElementById("currency-two");

  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;

  fetchExchangeRate(); // Recargar la tasa de cambio después del intercambio
}

// Función que se ejecuta al cambiar la cantidad
document.getElementById("amount-one").addEventListener("input", fetchExchangeRate);

// Función que se ejecuta al cambiar las monedas
document.getElementById("currency-one").addEventListener("change", fetchExchangeRate);
document.getElementById("currency-two").addEventListener("change", fetchExchangeRate);

// Función para intercambiar las monedas al hacer clic en el botón
document.getElementById("swap").addEventListener("click", swapCurrencies);

// Ejecutar la conversión al cargar la página por primera vez
fetchExchangeRate();
