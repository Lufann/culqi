# Culqi / Reto Técnico de Jasmin Huerta

Este repositorio contiene el código y la configuración de Docker para un reto técnico de Culqi. El proyecto utiliza un servidor Node.js con Express, junto con una base de datos MongoDB, para manejar un ejercicio que involucra operaciones con cadenas y palabras.

## Contenidos

- `index.js`: Contiene el servidor Node.js con la lógica del ejercicio propuesto, la conexión a la base de datos MongoDB, y un endpoint POST para procesar el ejercicio.
- `docker-compose.yml`: Archivo de configuración de Docker Compose que especifica los volúmenes, puertos y redes necesarios para ejecutar el proyecto.

## Requisitos

- Docker y Docker Compose instalados.
- Node.js y npm (opcional si no se utiliza Docker).

## Estructura del Proyecto

- **`index.js`**: Contiene el servidor Express y la conexión a MongoDB.
    - Configura el servidor Node.js y Express.
    - Define la ruta `/ejercicio` para manejar la lógica del ejercicio.
    - Conecta a la base de datos MongoDB.
- **`docker-compose.yml`**: Define los servicios Docker para el proyecto.
    - Define dos servicios: `node` y `mongodb`.
    - Configura los volúmenes, puertos y redes necesarios para los servicios.




## Configuración y Ejecución

1. **Clona el repositorio**:

    ```shell
    git clone https://github.com/Lufann/culqi
    cd culqi
    ```
2. **Instala las dependencias**:
    ```shell
    npm i
    ```
3. **Inicia los servicios**:

    Con Docker Compose, ejecuta:

    ```shell
    docker-compose up
    ```

    Esto iniciará dos contenedores:
    - `node`: Ejecuta el servidor Node.js, exponiendo el puerto 3000.
    - `mongodb`: Inicia una instancia de MongoDB, exponiendo el puerto 27017.

4. **Prueba la aplicación**:

    La aplicación estará disponible en `http://localhost:3000`.

    Puedes hacer una solicitud POST a la ruta `/ejercicio` con el siguiente formato de JSON en el cuerpo:


    Ejemplos
    
    ```json
    {
        "s": "barfoothefoobarman",
        "words": [
            "foo",
            "bar"
        ]
    }

    Output: [0,9]
    ```
     ```json
    {
        "s": "wordgoodgoodgoodbestword",
        "words": [
            "word",
            "good",
            "best",
            "word"
        ]
    }

    Output: []
    ```
    ```json
    {
        "s": "barfoofoobarthefoobarman",
        "words": [
            "bar",
            "foo",
            "the"
        ]
    }

    Output: [6,9,12]
    ```

    El servidor procesará la cadena `s` y las palabras proporcionadas, y guardará el resultado en la colección `culqi` de la base de datos MongoDB.

5. **Detén los servicios**:

    Para detener los servicios, presiona `Ctrl + C` en la terminal donde ejecutaste Docker Compose, o ejecuta:

    ```shell
    docker-compose down
    ```

