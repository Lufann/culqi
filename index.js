const express = require('express');
const bodyParser = require('body-parser');
const conectarMongoDB = require('./src/db/mongoConnection');
const exerciseController = require('./src/controllers/exerciseController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', exerciseController);

conectarMongoDB();

app.listen(port, () => {
    console.log(`Servidor Node.js escuchando en http://localhost:${port}`);
});
