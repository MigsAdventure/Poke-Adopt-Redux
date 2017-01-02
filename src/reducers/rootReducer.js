import { combineReducers } from 'redux';
import trainers from './trainers';
import pokemons from './pokemons';

export default combineReducers({
  trainers,
  pokemons,
});
