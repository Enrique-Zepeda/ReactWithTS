const myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myArrayT: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, "9", 10];
// const myArray2 = myArray // esto es una copia de la referencia del arreglo no crea una nuevo
const myArray2 = [...myArray]; // se usa ... para poder crear una copia
// myArray.push('10'); // no deja por el tipado
myArray.push(11);
myArray2.push(117);
myArrayT.push("Hola"); // ya deja por el tipado

console.log(myArray, myArray2, myArrayT);

for (const myNumber of myArray) {
  console.log(myNumber + 1);
}
