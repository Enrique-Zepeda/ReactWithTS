// Creamos una nueva promesa que, si sale bien,
// resolverá un valor de tipo number.
//
// <number> le dice a TypeScript:
// "cuando esta promesa se resuelva, entregará un número"
const myPromise = new Promise<number>((resolve, reject) => {
  // setTimeout simula una tarea asíncrona
  // que tarda 2 segundos en completarse
  setTimeout(() => {
    //! Quiero mi dinero

    // Si todo sale bien, usamos resolve(...)
    // para cumplir la promesa con el valor 100
    // resolve(100);

    // Si algo sale mal, usamos reject(...)
    // para rechazar la promesa con una razón/error
    reject("Se perdio");
  }, 2000); // espera 2 segundos
});

// ======================================================
// MANEJO DE LA PROMESA
// ======================================================

myPromise
  .then((myMoney) => {
    // .then() se ejecuta cuando la promesa se resuelve
    // correctamente con resolve(...)
    //
    // Como la promesa es Promise<number>,
    // TypeScript sabe que myMoney es un número
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    // .catch() se ejecuta cuando la promesa falla
    // o se rechaza con reject(...)
    //
    // reason contiene el motivo del error
    console.warn(reason);
  })
  .finally(() => {
    // .finally() se ejecuta siempre
    // sin importar si la promesa salió bien o mal
    //
    // Sirve para limpieza final o mensajes finales
    console.log("Pues a seguir con mi vida");
  });
