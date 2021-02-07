import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(res=> res.json())
    .then(data=> setPokemon(data), console.log(pokemon))
  },[])

  function handleAddPoke(newPoke){
    setPokemon([...pokemon, newPoke])
  }
 
  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} onAddPoke={handleAddPoke}/>
    </div>
  );
}

export default App;
