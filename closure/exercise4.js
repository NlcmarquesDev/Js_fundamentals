import fetch from "node-fetch";

const pokemonDownload = () => {
  let pokemonCache = {};
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  const download = async (pokemonName) => {
    if (pokemonCache[pokemonName]) {
      console.log(`${pokemonName} was in the cache`);
      return pokemonCache[pokemonName];
    } else {
      const response = await fetch(apiUrl + pokemonName);
      const json = await response.json();
      console.log(`${pokemonName} fecth from the Api`);
      pokemonCache[pokemonName] = json;
      return json;
    }
  };
  return download;
};

const getPokemon = pokemonDownload();
const mew = await getPokemon("mew");
getPokemon("mewtwo");
getPokemon("pikachu");

getPokemon("mew");
