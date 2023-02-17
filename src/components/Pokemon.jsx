import React from "react";
import "./Pokemon.css";

function Pokemon() {
  return (
    <div>
      <img alt="pokemon" className="pokemon__image" />

      <h1 className="pokemon__data">
        <span className="pokemon__number">ID - </span>

        <span className="pokemon__name">Name</span>
      </h1>
    </div>
  );
}

export default Pokemon;
