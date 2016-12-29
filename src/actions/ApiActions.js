import axios from 'axios';

export default function fetchPokemonList() {
  return {
    type: 'RECEIVE_POKEMON_LIST',
    payload: axios.get(`http://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`),
  };
}
