const { Document } = require('../models');
// appRouter es la funcion encargada de agregar las rutas de la API
const appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Hola :)");
  })

  // Agregando Endpoints para documentos
  // GET /documents Obtiene todos los documentos
  app.get("/documents", function(req, res) {
    return Document.findAll()
      .then((documents) => {
        res.status(200).send(documents);
      })
    
  })

  // GET /documents/:id Obtiene un documento especificado por el id
  app.get("/documents/:id", function(req, res) {
    const { id } = req.params;
    return Document.findOne({
      id: id
    }).then((document) => {
      res.status(200).send(document)
    });
  })

  // POST /documents Crea un documento, necesita los campos name y type
  app.post("/documents", function(req, res) {
    const { name, type } = req.body;
    return Document.create(
      {
        name: name,
        document_type: type
      }
    ).then((created) => {
      res.status(201).send(created)
    }).catch((err) => {
      res.status(200).send("Error al crear el documento")
    });
  })

  // PUT /documents/:id Actualiza un documento por el id, deben ir los campos solicitados
  app.put("/documents/:id", function(req, res) {
    const { id } = req.params;
    const { name, type } = req.body;
    return Document.update(
      {
        name: name,
        document_type: type
      },
      {
        where: { id: id }
      }
    ).then((result) => {
      res.status(200).send("Actualización completa del documento");
    })
  })

  // DELETE /documents/:id Borra un documento especificando el id
  app.delete("/documents/:id", function(req, res) {
    const { id } = req.params;
    return Document.destroy({
      where: {
        id: id
      }
    }).then((result) => {
      res.status(200).send("Documento eliminado");
    })
  })

}

// Exporta la funcion para su uso
module.exports = appRouter;