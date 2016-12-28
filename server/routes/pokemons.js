const express = require('express');
const router = express.Router();

const Pokemon = require('../models/Pokemon');

router.route('/:id')
   .put((req, res) => {
     Pokemon.findOne({ _id: req.params.id })
     .then(pokemon => res.send(pokemon))
     .catch(err => res.status(400).send(err));
   });

module.exports = router;
