const models = require('../models')
const axios = require('axios')
const regionController = {}

regionController.searchOne = async (req,res) => {
    try{
        let search = await axios.get(`https://pokeapi.co/api/v2/region/${req.params.name}/`)
        console.log(search.name)
        res.send(search.name)
    }
    catch(error){
            console.log(error)
            res.json({error})
    }
}


regionController.save = async (req,res) => {
    try {
        const [regionToSave, created] = await models.region.findOrCreate({
            where:{
                regionId: req.params.regionId
            },
            defaults:{
                regionId: req.params.regionId
            }
        })
       
        let user = await models.user.findOne({
            where: {
                id: req.params.userId
            }
        })
        await user.addRegion(regionToSave)
        let results = await user.getRegion()
        res.json({regionToSave, user, results})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}



module.exports = regionController