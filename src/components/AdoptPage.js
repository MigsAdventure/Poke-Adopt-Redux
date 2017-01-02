import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemonList } from '../actions/ApiActions';

// @connect(state => ({
//   pokemonList: state.pokemons,
// }), dispatch => ({
//   getPokemon() {
//     dispatch(fetchPokemonList);
//   },
// }))

class AdoptPage extends Component {
  constructor() {
    super();
    // this.state = {
    //   pokemonList: [],
    // };
  }

  componentDidMount() {
    this.props.getPokemon();
  }


  render() {
    const { pokemonList } = this.props;
    console.log('this.props:', this.props);
    console.log('pokemonList:', pokemonList);
    return (
      <div>
        {
          pokemonList.results && pokemonList.results.map((pokemon) => {
            return(
              <div>
                <h2>{pokemon.name}</h2>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    pokemonList: state.pokemons,
  }),
  dispatch => ({
    getPokemon() {
      dispatch(fetchPokemonList());
    },
  })
)(AdoptPage);
