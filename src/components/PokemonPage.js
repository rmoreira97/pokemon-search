import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Fetch Pokémon data when the component mounts
    fetch("http://localhost:5000/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  const handleSearchChange = (event) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    console.log("Search Query:", newQuery); // Log the search query
  };

  // Define the filteredPokemon array based on the search query
  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onAddPokemon = async (newPokemon) => {
    // Send a POST request to your server to add the new Pokémon
    try {
      const response = await fetch("http://localhost:5000/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPokemon),
      });

      if (!response.ok) {
        throw new Error("Failed to add Pokémon");
      }

      // Assuming the response contains the newly added Pokémon data,
      // you can parse it and add it to the local state
      const addedPokemon = await response.json();

      // Update the state by creating a new array that includes the added Pokémon
      setPokemonData((prevPokemonData) => [...prevPokemonData, addedPokemon]);
    } catch (error) {
      console.error("Error adding Pokémon:", error);
    }
  };

  const onDeletePokemon = async (pokemonId) => {
    // Send a DELETE request to remove the Pokémon by ID
    try {
      const response = await fetch(
        `http://localhost:5000/pokemon/${pokemonId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete Pokémon");
      }

      // Remove the deleted Pokémon from the local state
      setPokemonData((prevPokemonData) =>
        prevPokemonData.filter((pokemon) => pokemon.id !== pokemonId)
      );

      console.log("Pokémon deleted successfully");
    } catch (error) {
      console.error("Error deleting Pokémon:", error);
    }
  };

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <button
        className="edit-button"
        onClick={() => setIsEditMode(!isEditMode)}
      >
        {isEditMode ? "Exit Edit Mode" : "Edit Mode"}
      </button>
      <br />
      <PokemonForm onAddPokemon={onAddPokemon} />
      <br />
      <Search onChange={handleSearchChange} />
      <br />
      <PokemonCollection
        pokemon={filteredPokemon}
        onDeletePokemon={onDeletePokemon}
        isEditMode={isEditMode}
      />{" "}
      {/* Pass onDeletePokemon as a prop */}
    </Container>
  );
}

export default PokemonPage;
