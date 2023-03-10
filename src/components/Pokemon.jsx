import React from "react";
import useFetchPokemon from "../hook/useFetchPokemon";
import "./Pokemon.css";

function Pokemon() {
  const { pokemon } = useFetchPokemon();

  return (
    <div>
      {
        pokemon.erro ? <></> : 
        <img src={pokemon.img} alt="pokemon" className="pokemon__image" />
      }
      <h1 className="pokemon__data">
      {
        pokemon.erro ? <></> : 
        <span className="pokemon__number">{pokemon.id} - </span>
      }
      {
        pokemon.erro ? <span className="pokemon__name">{pokemon.erro}</span> : 
        <span className="pokemon__name">{pokemon.name}</span>
      }       
      </h1>
    </div>
  );
}

export default Pokemon;
