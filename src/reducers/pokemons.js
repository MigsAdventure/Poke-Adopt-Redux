export default function pokemons(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case 'RECEIVE_POKEMON_LIST_FULFILLED' : {
      console.log('payload.data IN POKEMON REDUCER: ', payload.data);
      return payload.data;
    }
    default: return state;
  }
}
