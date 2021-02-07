import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({search, pokemon}) {

  const filteredPoke = pokemon.filter((poke) => poke.name.toLowerCase().includes(search.toLowerCase()))

  const showPokemon = filteredPoke.map((poke) => {
    return <PokemonCard key={poke.id} pokemon={poke} />
  })
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {showPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
