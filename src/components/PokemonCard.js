import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [flipped, setFlipped] = useState(true)

  function handleImageFlip() {
    setFlipped(!flipped)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleImageFlip}>
          {flipped ? <img src= {pokemon.sprites.front} alt={pokemon.name} /> :
           <img src= {pokemon.sprites.back} alt={pokemon.name} /> }
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
