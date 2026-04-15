// tenemos que tipar todo para evitar errores
function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => `Hola ${name}`;

// const message = greet(111); se quejaria porque pide un string
const message = greet("Goku");
const message2 = greet2("Vegeta");
console.log(message);
console.log(message2);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: "ABC-117",
    username: "El_PAPU",
    // age: 10 // no deja por la interface
  };
}

const getUser2 = (): User => ({
  // abrir y cerrar parentesis para recortarlo return implicito
  uid: "ABC-119",
  username: "SIIIU",
});

const user = getUser();
const user2 = getUser2();
console.log(user.uid);
console.log(user2.uid);

const myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// myNumbers.forEach(function(value){
//     console.log({value});
// });
myNumbers.forEach((val) => console.log({ val }));
myNumbers.forEach(console.log); // 1 0 -- asi impmire valor y indice
