const express = require('express'); 
const Culqi = require('../models/culqiModel'); 
const findSubstring = require('../services/substringService'); 

// Creando una instancia de router
const router = express.Router(); 

// Manejando la solicitud POST al endpoint /ejercicio
router.post('/ejercicio', async (req, res) => { 

    const s = req.body.s; // Extrayendo 's' del cuerpo de la solicitud
    const words = req.body.words; // Extrayendo 'words' del cuerpo de la solicitud

    // Verificando si 's' o 'words' faltan o están vacíos
    if (!s || !words || words.length === 0) { 
        return res.status(400).json({ code: 400, error: 'Entrada inválida: cadena o palabras faltantes' });
    }

    try {
        const result = findSubstring(s, words);
        const document = { output: result };
        // Guardando el documento en la colección Culqi
        await Culqi.create(document); 
        console.log('Resultados guardados en la colección "culqi"');
        res.status(201).json({ code: 201, data: result });
    } catch (err) {
        console.error('Error al guardar en la base de datos:', err); 
        res.status(500).json({ code: 500, error: 'Error interno del servidor' });
    }
});

module.exports = router; 