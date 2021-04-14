const models = require('../models')

const userController = {}

userController.create = async (req,res) => {
    try{
        const user = await models.user.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })

        res.json({message: 'ok', user})
    } catch (error) {
        res.status(400)
        res.json({ error: 'name already taken'})
    }
}


userController.login = async (req,res) => {
    const user = await models.user.findOne({
        where: {
            email: req.body.email
        }
    })
    if(user && (user.password === req.body.password)) {
        res.status(200)
        res.json({id: user.id, name: user.name})
    }
    else{
        res.status(401)
        res.json({error: 'invalid credentials'})
    }
}

userController.delete = async(req,res) => {
    try{
        let user = await models.user.findOne({
            where: {
                id: req.params.id
            }
        })
        await user.destroy()
        res.json({ message: 'user deleted'})
    }
    catch (error) {
        res.json({error})
    }
}



module.exports = userController