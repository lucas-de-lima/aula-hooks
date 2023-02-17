import React from "react";
import "./Pokedex.css";
import pokedexImg from "../images/pokedex.png";

function Pokedex() {
  return (
    <>
      <div className="buttons">
        <button className="button">Prev</button>
        <button className="button">Next</button>
      </div>
      <img src={pokedexImg} alt="pokedex" />
    </>
  );
}

export default Pokedex;
