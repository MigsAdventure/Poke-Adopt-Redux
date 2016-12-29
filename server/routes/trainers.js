const express = require('express');
const router = express.Router();

const Trainer = require('../models/Trainer');
const Pokemon = require('../models/Pokemon');

router.route('/')
  .get((req, res) => {
    Trainer.find({})
    .then(allTrainers => res.send(allTrainers))
    .catch(err => res.status(400).send(err));
  })

  .post((req, res) => {
    Trainer.create(req.body)
    .then(trainer => Trainer.find({}))
    .then(allTrainers => res.send(allTrainers))
    .catch(err => res.status(400).send(err));
  });

router.route('/:id')
   .get((req, res) => {
     Trainer.findOne({ _id: req.params.id })
     .populate('pokemons')
     .then(trainer => res.send(trainer))
     .catch(err => res.status(400).send(err));
   })

   .post((req, res) => {
     let pokemonId;
     Pokemon.create(req.body)
     .then((pokemon) => {
       pokemonId = pokemon._id;
       return Trainer.findById(req.params.id);
     })
     .then((trainer) => {
       trainer.pokemons.push(pokemonId);
       return trainer.save();
     })
     .then(() => Trainer.findById(req.params.id).populate('pokemons'))
     .then(trainer => res.send(trainer))
     .catch(err => res.status(400).send(err));
   });

module.exports = router;
