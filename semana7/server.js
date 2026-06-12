const express = require('express');
const app = express();

app.use(express.json());

// Arreglo global en memoria para simular el almacenamiento de datos
let reportes = [];

// Ruta GET: Devuelve la lista completa de reportes guardados
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST: Recibe un reporte del cliente y lo mete en el array
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1, // El ID se genera según el tamaño de la lista
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte); // Guardando en el array en memoria

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});