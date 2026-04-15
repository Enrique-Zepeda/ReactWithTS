// Creamos un objeto llamado person.
// Este objeto representa a una persona/héroe con nombre, edad y clave.
const person = {
  name: "Tony",
  age: 45,
  key: "IronMan",
};

// ======================================================
// ACCESO NORMAL A LAS PROPIEDADES DE UN OBJETO
// ======================================================

// Así se hacía de forma básica:s
// const name = person.name;
// const age = person.age;
// const key = person.key;
// console.log({ name, age, key });

// ======================================================
// DESESTRUCTURACIÓN DE OBJETOS
// ======================================================

// Aquí extraemos las propiedades del objeto person
// y las guardamos en variables con el mismo nombre.
const { age, key, name } = person;

// Mostramos las variables en consola.
// El resultado será un objeto con esas 3 propiedades.
console.log({ name, age, key });

// ======================================================
// INTERFACE HERO
// ======================================================

// Una interface en TypeScript sirve para definir
// cómo debe verse un objeto.
interface Hero {
  name: string; // name debe ser texto
  age: number; // age debe ser número
  key: string; // key debe ser texto
  rank?: string; // rank es opcional
  // Esto significa que puede venir o no venir.
  // Si no existe, no marca error.
}

// ======================================================
// FUNCIÓN useContext
// ======================================================

// Esta función recibe un objeto tipo Hero.
// También usa destructuración desde los parámetros.
//
// Si rank no viene en el objeto, por defecto será "sin rango".
const useContext = ({ age, key, name, rank = "sin rango" }: Hero) => ({
  // Renombramos key como keyName en el objeto de retorno
  keyName: key,

  // Creamos un objeto user anidado con name y age
  user: {
    name,
    age,
  },

  // También devolvemos rank
  rank,
});

// ======================================================
// USAR LA FUNCIÓN CON EL OBJETO person
// ======================================================

// Llamamos a useContext(person)
// y guardamos el resultado en la variable context.
const context = useContext(person);

// Mostramos el objeto que devuelve la función.
console.log(context);

// Podemos acceder a keyName.
// TypeScript sabe que existe y sabe qué tipo tiene.
context.keyName; // TS nos ayuda con el tipado

// ======================================================
// DESESTRUCTURACIÓN DEL OBJETO DEVUELTO
// ======================================================

// Aquí hacemos destructuración del resultado de useContext(person).
// Extraemos:
// - keyName
// - rank
// - y dentro de user, extraemos age y name
//
// Además, age lo renombramos a age1
// y name lo renombramos a name1
const {
  keyName,
  rank,
  user: { age: age1, name: name1 },
} = useContext(person);

// Mostramos esos valores por separado
console.log(rank, keyName, age1, name1);

// ======================================================
// OTRA FORMA DE HACERLO EN DOS PASOS
// ======================================================

// Primero extraemos solo user
const { user } = useContext(person);

// Luego, desde user, extraemos name
// pero lo renombramos a nuevoName
const { name: nuevoName } = user;

// Mostramos el nuevo nombre
console.log(nuevoName);
