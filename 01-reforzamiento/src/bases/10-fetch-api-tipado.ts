// Importamos solo el tipo de la respuesta de Giphy.
// Esto le dice a TypeScript cómo viene estructurada la data.
import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "x5pZvZ41ztxkUj9nSOr1cbUx50x3HSEQ";

// Hacemos la petición a la API de Giphy
// para obtener un sticker aleatorio.
const myRequest = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`);

// Esta función recibe una URL string
// y crea una imagen dentro del DOM.
const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.append(imgElement);
};

myRequest
  .then((response) => response.json()) // Convertimos la respuesta a JSON
  .then(({ data }: GiphyRandomResponse) => {
    // Aquí le decimos a TypeScript que el resultado
    // tiene la estructura GiphyRandomResponse.
    //
    // Gracias a eso, TS sabe que existe:
    // data.images.original.url

    const imageUrl = data.images.original.url;

    // Enviamos la URL a la función que crea la imagen en la página
    createImageInsideDOM(imageUrl);
  })
  .catch((err) => {
    // Si ocurre un error, lo mostramos en consola
    console.error(err);
  });
