const express = require('express');
const cors = require('cors');
const app = express();

// Configuración de CORS
const corsOptions = {
  origin: 'http://127.0.0.1:5501', // Reemplaza con el dominio permitido
  optionsSuccessStatus: 200, // Algunos navegadores antiguos requieren este código de estado
};

// Habilitar CORS para todas las rutas
app.use(cors(corsOptions));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.json({ msg: 'Esta ruta está habilitada para CORS.' });
});

app.get('/perras', (req, res) => {
    res.json({ msg: 'Esta ruta está PErrrrrrrraaasss para CORS.' });
  });
  

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://127.0.0.1:${port}`);
});
