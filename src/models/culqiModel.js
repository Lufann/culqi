const mongoose = require('mongoose');

// Desactiva la pluralización automática de los nombres de modelos en mongoose
mongoose.pluralize(null);

// Define el esquema
const culqiSchema = new mongoose.Schema({
    output: [Number],
}, { versionKey: false });

// Crea un modelo de mongoose llamado 'Culqi' utilizando el esquema 'culqiSchema'.
const Culqi = mongoose.model('culqi', culqiSchema);

// Exporta el modelo 'Culqi' para que pueda ser utilizado en otras partes de la aplicación.
module.exports = Culqi;
