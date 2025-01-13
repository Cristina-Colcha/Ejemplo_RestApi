const express = require('express');
const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Middleware para parsear JSON
app.use(express.json());

// Ruta GET de ejemplo que muestra el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Ruta GET para obtener usuarios
app.get('/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Ana' }
  ];
  res.json(usuarios);
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
