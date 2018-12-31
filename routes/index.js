// appRouter es la funcion encargada de agregar las rutas de la API
const appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Hola :)");
  })

  // Agregando Endpoints para documentos
  // GET /documents Obtiene todos los documentos
  app.get("/documents", function(req, res) {
    res.status(200).send("Obtener lista de documentos");
  })

  app.get("/documents/:id", function(req, res) {
    res.status(200).send("Obtener documento especifico");
  })

  app.post("/documents", function(req, res) {
    res.status(200).send("Documento creado con exito");
  })

  app.patch("/documents/:id", function(req, res) {
    res.status(200).send("Actualización parcial de documento");
  })

  app.put("/documents/:id", function(req, res) {
    res.status(200).send("Actualizar completamente el documento");
  })

  app.delete("/documents/:id", function(req, res) {
    res.status(200).send("Documento eliminado");
  })

}

// Exporta la funcion para su uso
module.exports = appRouter;