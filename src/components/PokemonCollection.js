import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, onDeletePokemon, isEditMode }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((poke) => (
        <PokemonCard
          key={poke.id}
          id={poke.id}
          name={poke.name}
          spriteUrl={poke.sprites}
          hp={poke.hp}
          onDeletePokemon={onDeletePokemon}
          isEditMode={isEditMode}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
