import React from "react";
import { Card } from "semantic-ui-react";
import { useState } from "react";

// We have to display the pokemons name, sprite and hp, pass the details as props to the component
// and use the props to render the details.
//

function PokemonCard({ name, spriteUrl, hp }) {
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
            alt={`Pokeon ${name}`}
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
    </Card>
  );
}

export default PokemonCard;
