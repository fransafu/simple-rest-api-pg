const express = require('express');
const bodyParser = require('body-parser');

// Llamando a Sequelize
const models = require('./models');

// Llamando appRouter como routes para cargar las rutas
const routes = require('./routes');

// Definir puerto desde variable de entorno o por defecto 3000
const PORT_SERVER = process.env.PORT || 3000;

// Se crea la aplicacion
const app = express();

// Se especifica que utilice JSON como formato
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Se cargan las rutas del proyecto
routes(app);

// sincroniza la base de datos con los modelos
models.sequelize.sync().then(function() {
  // Comienza el servidor a escuchar el puerto especificado
  const server = app.listen(PORT_SERVER, function() {
    console.log("Servidor corriendo en el puerto: ", server.address().port);
  });
  // Manejo de error o exito (pendiente)
  // server.on('error', onError);
  // server.on('listening', onListening);
});
