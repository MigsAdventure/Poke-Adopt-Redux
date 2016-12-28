const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: { type: String, minlength: 1 },
  timestamp: { type: Date, default: Date.now() },
  image: { type: String },
  firstMessage: { type: String },
  pokemons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'pokemons' }],
});

const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;
