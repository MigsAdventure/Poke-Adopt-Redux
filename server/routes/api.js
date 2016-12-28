const express = require('express');
const router = express.Router();

router.use('/pokemons', require('./pokemons'));
router.use('/trainers', require('./trainers'));

module.exports = router;
