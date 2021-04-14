const pokemonController = require('../controllers/pokemonController')

const express = require('express')
const pokemonRoutes = express.Router()

//pokemonRoutes.post('/search/:pokemon',pokemonController.search)

pokemonRoutes.post('/:userId/save/:pokemonId', pokemonController.save)

pokemonRoutes.get('/search/:pokemonId',pokemonController.searchOne)
module.exports = pokemonRoutes