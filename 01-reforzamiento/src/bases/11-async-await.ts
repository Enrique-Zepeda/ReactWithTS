// Importamos el tipo de respuesta que esperamos de la API de Giphy
import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "x5pZvZ41ztxkUj9nSOr1cbUx50x3HSEQ";

// Función que recibe una URL y crea una imagen en el DOM
const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.append(imgElement);
};

// Función asíncrona que obtiene la URL de un gif aleatorio
const getRandomGifUrl = async (): Promise<string> => {
  // Esperamos la respuesta de la petición HTTP
  const response = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`);

  // Convertimos la respuesta a JSON
  // y le decimos a TypeScript que esa respuesta tiene
  // la estructura GiphyRandomResponse
  const { data }: GiphyRandomResponse = await response.json();

  // Regresamos únicamente la URL de la imagen original
  return data.images.original.url;
};

// Llamamos la función.
// Como getRandomGifUrl regresa una promesa con un string,
// usamos .then() para recibir esa URL
// y mandarla a la función que crea la imagen en el DOM.
getRandomGifUrl().then(createImageInsideDOM);
