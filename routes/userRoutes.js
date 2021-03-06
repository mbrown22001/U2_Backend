const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/', userController.create)
userRoutes.delete('/:id', userController.delete)
userRoutes.post('/login',userController.login)
// userRoutes.get('/:userId/getpokemons',userController.getPokemons)

module.exports = userRoutes