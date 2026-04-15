const firstName = "Kike"; // Tipo Kike
const lastName: string = "Zepeda"; // Tipo String

let diceNUmber = 5;
diceNUmber = 3;
// diceNUmber = "1" // error por TS

const continsLetterH = lastName.includes("h");
console.log({ continsLetterH, diceNUmber }); // {} para ver la variable y su valor
console.log(`${firstName} ${lastName}`);
