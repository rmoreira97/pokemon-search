import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    // MAKE a fetch request to retreieve pokemon data

    fetch("http://localhost:4000/pokemon")
      .then((r) => r.json())
      .then((pokemonData) => {
        setPokemonData(pokemonData);
      });
  }, []); //Empty dependency array to fetch data whenthe component mounts

  return (
    <div className="App">
      <PokemonPage pokemonData={pokemonData} />
    </div>
  );
}

export default App;
