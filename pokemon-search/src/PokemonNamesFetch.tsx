import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export const PokemonNamesFetch = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("../public/pokemon.json")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return { pokemon };
};
