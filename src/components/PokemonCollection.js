import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((poke) => (
        <PokemonCard
          key={poke.id}
          name={poke.name}
          spriteUrl={poke.sprites}
          hp={poke.hp}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
