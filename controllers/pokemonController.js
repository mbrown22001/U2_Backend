const models = require('../models')
const axios = require('axios')
const pokemonController = {}



pokemonController.searchOne = async (req,res) => {
    try{
        let search = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        console.log(search.name)
        res.send(search.name)
    }
    catch(error){
            console.log(error)
            res.json({error})
    }
}


pokemonController.save = async (req,res) => {
    try {
        const [pokemonToSave, created] = await models.pokemon.findOrCreate({
            where:{
                pokemonId: req.params.pokemonId
            },
            defaults:{
                pokemonId: req.params.pokemonId
            }
        })
       
        let user = await models.user.findOne({
            where: {
                id: req.params.userId
            }
        })
        await user.addPokemon(pokemonToSave)
        let results = await user.getPokemon()
        res.json({pokemonToSave, user, results})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}



module.exports = pokemonController
