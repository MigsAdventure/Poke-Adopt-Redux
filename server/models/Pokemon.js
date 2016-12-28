const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  image: { type: String },
  pokemon: { type: String },
  timestamp: { type: Date, default: Date.now() },
});

const Pokemon = mongoose.model('pokemons', pokemonSchema);

module.exports = Pokemon;
