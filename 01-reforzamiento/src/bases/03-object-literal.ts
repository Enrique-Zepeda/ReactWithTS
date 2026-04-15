interface Person {
  // solo es el cascaron de como quiero que luzca algo
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const iroman: Person = {
  // con el nombre selecionado y dandole a f2 podemos cambiarlo en todo el archivo
  firstName: "Tony",
  lastName: "Stark",
  age: 23,
  //   address: {
  //     postalCode: "344",
  //     city: "New York",
  //   },
};

const spiderman: Person = {
  // con ctrl + . puedo agregar las propiedades faltantes rapidamente
  firstName: "Peter",
  lastName: "Parker",
  age: 22,
};

console.log(iroman);

// const spiderman = iroman; // aqui no es una copia es una referencia a la direccion de memoria asi que cualquier modificacion tambien se va a cambiar iroman y spiderman
// const spiderman = { ...iroman }; // con ... se rompe la referencia de primer nivel y se puede seguir modificando las de mas nivels como address
// const spiderman = structuredClone(iroman); // esto crea una copia a profundidad
// spiderman.firstName = "Peter";
// spiderman.lastName = "Parker";
// spiderman.address.city = "Texas";

// console.log(iroman, spiderman); // los dos objetos en city tendran texas si se usa ...
