import { createContext, useContext } from "react";

export const PokemonList = ({ pokemon }: { pokemon: Pokemon[] }) => {
  const ThemeContext = createContext("light");

  function ColorTest() {
    const theme = useContext(ThemeContext);
    return (
      <>
        <div>
          <div>Theme : {theme}</div>
          {pokemon.map((p) => (
            <div key={p.id}>{p.name}</div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <ThemeContext.Provider value="dark">
        <div>{ColorTest()}</div>
      </ThemeContext.Provider>
    </>
  );
};
