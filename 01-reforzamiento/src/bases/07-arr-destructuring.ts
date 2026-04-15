// Creamos un arreglo con nombres de personajes
const characterName = ["Goku", "Vegeta", "trunks"];

// ======================================================
// DESESTRUCTURACIÓN DE ARREGLOS
// ======================================================

// En los arreglos SÍ importa la posición.
// A diferencia de los objetos, aquí no importa el nombre,
// sino el lugar donde está cada valor.
//
// p1 toma el primer elemento: "Goku"
// el segundo elemento se omite con la coma vacía
// p3 toma el tercer elemento: "trunks"
const [p1, , p3] = characterName;

console.log({ p1, p3 });

// ======================================================
// FUNCIÓN QUE RETORNA UN ARREGLO
// ======================================================

const returnsArrayFn = () => {
  // "as const" le dice a TypeScript que este arreglo
  // tendrá siempre exactamente:
  // posición 0 -> string
  // posición 1 -> number
  //
  // Sin "as const", TS podría pensar que ambos valores
  // pertenecen a un arreglo más general como (string | number)[]
  return ["ABC", 123] as const;
};

// Desestructuramos el arreglo que regresa la función
const [letras, numeros] = returnsArrayFn();

// numeros es number, entonces sí suma
console.log(numeros + 100); // 223

// letras es string, entonces concatena
console.log(letras + 100); // "ABC100"

// ======================================================
// EJEMPLO TIPO useState
// ======================================================

// Esta función recibe un string
// y regresa un arreglo con 2 posiciones:
//
// 1. el valor actual
// 2. una función para cambiar/imprimir el nuevo valor
const useState = (value: string) => {
  return [
    value,
    (newValue: string) => {
      console.log(newValue);
    },
  ] as const;
};

// Desestructuramos lo que devuelve useState
//
// name -> recibe el valor inicial
// setName -> recibe la función
const [name, setName] = useState("Goku");

// Mostramos el valor inicial
console.log(name); // Goku

// Llamamos a la función con un nuevo valor
setName("Vegeta"); // Imprime "Vegeta"
