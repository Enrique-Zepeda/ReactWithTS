import { heroes, Owner, type Hero } from "../data/heros.data";

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => hero?.id === id);
  if (!hero) {
    throw new Error(`No existe el heroe con id:${id}`);
  }
  return hero;
};

console.log(getHeroById(1));

export const getHeroByOwner = (owner: Owner): Hero[] | undefined => {
  const heros = heroes.filter((hero) => hero.owner === owner);
  if (!heroes) {
    throw new Error(`No existe el heroe con id:${owner}`);
  }
  return heros;
};
