# simple-rest-api-pg

API REST de ejemplo con base de datos PostgreSQL

## History 

1) Primero se debe ejecutar el comando:

npm init

Este comando realiza las preguntas basicas para generar el archivo "package.json", este archivo es el responsable de tener descripcion del proyecto, nombre del paquete, version, script de ejecución y las dependencias del proyecto entre otras cosas.

2) Una vez creado el archivo package.json, se debe generar el archivo README.md que permite especificar detalles del proyecto como los que lees ahora.

3) Se agrega la carpeta routes que contiene las rutas del proyecto y además, se define en el archivo index.js que se encuentra en la raiz del proyecto el servidor de express.js con el cual se trabaja.

4) Se agrega el archivo docker-compose.yml que permite crear una base de datos postgres donde trabajar.

Para crear esta base de datos se debe ejecutar el comando:

docker-compose up

Y para dejar de trabajar con la base de datos se debe usar o simplemente Ctrl + C:

docker-compose down

5) Agregar las dependecias de sequelize junto con pg (conector con postgresql)

npm i --save sequelize pg

6) Agregamos el CLI de sequelize en desarrollo:

npm i --save-dev sequelize-cli

7) ejecutamos el CLI iniciando el proyecto

node_modules/.bin/sequelize init

Esto debe crear 3 carpetas (models, migrations y seeders)

8) Con la base de datos iniciada, se debe ingresar y crear la base de datos 'rest_api'

  psql -h localhost -U postgres -W -p 5432

  CREATE DATABASE rest_api;

  \q

