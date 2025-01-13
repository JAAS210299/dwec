// Importar dependencias
require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3001;

// Habilitar CORS para permitir solicitudes desde el cliente
const cors = require("cors");
app.use(cors());

// Rutas para la API
app.get("/rate", async (req, res) => {
  const { from, to } = req.query;

  // Verificar que se recibieron los parámetros de moneda
  if (!from || !to) {
    return res.status(400).json({ error: "Faltan parámetros de moneda" });
  }

  try {
    // Llamada a la API externa de tasa de cambio utilizando Axios
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${from}`);
    
    if (response.data.result === "success") {
      const rate = response.data.conversion_rates[to];
      if (rate) {
        res.json({ rate });
      } else {
        res.status(404).json({ error: "Tasa de cambio no encontrada" });
      }
    } else {
      res.status(500).json({ error: "Error al obtener datos de la API" });
    }
  } catch (error) {
    console.error("Error al llamar a la API externa:", error);
    res.status(500).json({ error: "Error al conectar con el servicio de tasas" });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
