import { PokemonNamesFetch } from "./PokemonNamesFetch";

import { createContext, useContext } from "react";

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

//context value
export const PokemonContext = createContext<
  ReturnType<typeof PokemonNamesFetch>
>({} as unknown as ReturnType<typeof PokemonNamesFetch>);

//usePokemon Function
export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  return (
    <PokemonContext.Provider value={PokemonNamesFetch()}>
      {children}
    </PokemonContext.Provider>
  );
}
