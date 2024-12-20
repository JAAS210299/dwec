const llamandoAPI = async () => {
  try {
    const respuesta = await fetch('http://127.0.0.1:3000/perras');
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};

llamandoAPI();
