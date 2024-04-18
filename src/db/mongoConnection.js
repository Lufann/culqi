const mongoose = require('mongoose');

async function conectarMongoDB() {
    try {
        //Conecta a la base de datos MongoDB usando la URL especificada
        await mongoose.connect('mongodb://mongodb:27017/local');
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
    }
}

module.exports = conectarMongoDB;
