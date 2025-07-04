import "./pokemon.css";
import { useEffect, useState } from "react";

export const PokemonCard = () => {
  const [pokemon, setPokemon] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (!pokemon) return "...loading";
  return (
    <section className="container">
      <header>
        <h1>Lets catch pokemon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{pokemon.name}</h1>
        </li>
      </ul>
    </section>
  );
};
