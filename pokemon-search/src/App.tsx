// import { PokemonList } from "./PokemonList";
// import { PokemonNamesFetch } from "./PokemonNamesFetch";
import "./index.css";
import { usePokemon, PokemonProvider } from "./store";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function SearchBox() {
  return <input className="form-control" placeholder="Search Box" />;
}

//=====================================================================
function App() {
  //==================================================================
  //PokemonList Function
  const PokemonLists = () => {
    const { pokemon } = usePokemon();

    return (
      <section className="main-body">
        <ul className="row gx-5 mx-auto ul-list">
          {pokemon.map((p) => (
            <li key={p.id} className="col-sm-4 gy-3 ">
              <div className="card card-body">
                <img
                  width="150"
                  height="150"
                  className="rounded-circle mx-auto"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
                  alt=""
                />
                <h3 className="text-center">{p.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  };

  //====================================================================
  //APP RETURN
  return (
    <>
      {/* <div>{JSON.stringify(pokemon)}</div> */}
      {/* <PokemonContext.Provider value={PokemonNamesFetch()}>
        <PokemonLists />
      </PokemonContext.Provider> */}

      <PokemonProvider>
        <div className="mx-auto w-75 p-3">
          <SearchBox />
          <PokemonLists />
        </div>
      </PokemonProvider>
    </>
  );
}

export default App;
