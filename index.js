const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const PORT_SERVER = process.env.PORT || 3000;

// Se crea la aplicacion
const app = express();

// Se especifica que utilice JSON como formato
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Se cargan las rutas del proyecto
routes(app);

// Comienza el servidor a escuchar el puerto especificado
const server = app.listen(PORT_SERVER, function() {
  console.log("Servidor corriendo en el puerto: ", server.address().port);
});