import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";
import "../PokemonCard.css";

function PokemonCard({ id, name, spriteUrl, hp, onDeletePokemon, isEditMode }) {
  const [isFront, setIsFront] = useState(true);

  const toggleSprite = () => {
    setIsFront(!isFront);
  };

  return (
    <Card>
      <div onClick={toggleSprite}>
        <div className="image">
          <img
            src={isFront ? spriteUrl.front : spriteUrl.back}
            alt={`Pokemon ${name}`}
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} HP
          </span>
        </div>
      </div>
      <div className="card-content">
        {isEditMode && ( // Conditionally render the Remove button
          <Button
            className="remove-button"
            color="red"
            onClick={() => onDeletePokemon(id)}
          >
            Remove
          </Button>
        )}
      </div>
    </Card>
  );
}

export default PokemonCard;
