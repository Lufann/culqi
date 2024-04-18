function findSubstring(s, words) {
    // Retorna arreglo vacio si la cadena "s" o el arreglo "words" estan vacios
    if (!s || !words || words.length === 0) {
        return [];
    }

    const wordLength = words[0].length;
    const numWords = words.length;
    const totalLength = wordLength * numWords;
    
    // Mapa para contar la repeticion de una palabra
    const wordsMap = words.reduce((acc, word) => {
        acc.set(word, (acc.get(word) || 0) + 1);
        return acc;
    }, new Map());

    // Mapea los índices de la cadena
    const indices = s.split('').map((_, index) => {
        return index;
    });

    // Filtra los índices que forman subcadenas válidas y almacena en una variable
    const filteredIndices = indices.filter(index => {
        // Obtiene la subcadena de la cadena original
        const substring = s.slice(index, index + totalLength);
        const seen = new Map();
        for (let i = 0; i < numWords; i++) 
        {
            // Obtiene la palabra actual de la subcadena
            const word = substring.slice(i * wordLength, (i + 1) * wordLength);
            // Cuenta las apariciones de la palabra
            seen.set(word, (seen.get(word) || 0) + 1);
            // Comprueba si el recuento excede el recuento en el mapa de palabras
            if (seen.get(word) > (wordsMap.get(word) || 0)) {
                return false;
            }
        }
        return true;
    });

    console.log("Filtered indices:", filteredIndices);
    return filteredIndices;
}

module.exports = findSubstring;
