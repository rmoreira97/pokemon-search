import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemonData }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    console.log("Search Query:", newQuery); // Log the search query
  };

  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search onChange={handleSearchChange} />
      <br />
      <PokemonCollection pokemon={filteredPokemon} /> {/* Use 'pokemon' prop */}
    </Container>
  );
}

export default PokemonPage;
