// ======================================================
// INTERFACE HERO
// ======================================================

// Una interface define la estructura que debe tener un objeto.
// En este caso, cualquier héroe debe tener:
// - id: número
// - name: texto
// - owner: un valor del enum Owner
export interface Hero {
  id: number;
  name: string;
  owner: Owner;
}

// ======================================================
// ENUM OWNER
// ======================================================

// Un enum sirve para agrupar valores constantes relacionados.
// Aquí estamos definiendo los posibles dueños/universos
// a los que puede pertenecer un héroe.
//
// Owner.DC = "DC"
// Owner.Marvel = "Marvel"
//
// Esto ayuda a evitar errores de escritura,
// por ejemplo escribir "marvel" o "Mvarel" por accidente.
export enum Owner {
  DC = "DC",
  Marvel = "Marvel",
}

// ======================================================
// ARREGLO DE HÉROES
// ======================================================

// Aquí creamos un arreglo llamado heroes.
// El tipo Hero[] significa:
// "este arreglo solo puede contener objetos tipo Hero"
export const heroes: Hero[] = [
  {
    id: 1, // identificador único del héroe
    name: "Batman", // nombre del héroe
    owner: Owner.DC, // pertenece a DC
  },
  {
    id: 2,
    name: "Spiderman",
    owner: Owner.Marvel, // pertenece a Marvel
  },
  {
    id: 3,
    name: "Superman",
    owner: Owner.DC,
  },
  {
    id: 4,
    name: "Flash",
    owner: Owner.DC,
  },
  {
    id: 5,
    name: "Wolverine",
    owner: Owner.Marvel,
  },
];
