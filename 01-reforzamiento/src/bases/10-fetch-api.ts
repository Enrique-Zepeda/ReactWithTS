// Sin tipado en TypeScript es más difícil identificar
// las propiedades correctas y saber qué tipo de dato estamos usando.

const API_KEY = "x5pZvZ41ztxkUj9nSOr1cbUx50x3HSEQ";

// Hacemos una petición a la API de Giphy
// para obtener un sticker aleatorio.
const myRequest = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`);

// Forma corta y más limpia de manejar la promesa
myRequest
  .then((response) => response.json()) // Convertimos la respuesta a JSON
  .then((data) => {
    // Aquí "data" contiene toda la información que regresa la API.
    // Vamos entrando a sus propiedades anidadas hasta llegar a la URL de la imagen.
    const imageUrl = data.data.images.original.url;

    // Imprimimos la URL en consola
    console.log(imageUrl);

    // Creamos un elemento <img> dinámicamente en el DOM
    const imgElement = document.createElement("img");

    // Le asignamos la URL de la imagen al src
    imgElement.src = imageUrl;

    // Agregamos la imagen al body del documento
    document.body.append(imgElement);
  })
  .catch((err) => {
    // Si ocurre un error en la petición o en el procesamiento,
    // lo mostramos en consola
    console.error(err);
  });
