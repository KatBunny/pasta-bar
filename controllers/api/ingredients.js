//-----Backend Ingredients Controllers-----//


const Ingredients = require("../../models/ingredient")

//show all
async function show(req, res, next) {
    try {
        const ingredients = await Ingredients.find({})
        res.json(ingredients)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}


//----For Admin Users Only-----//

//create
async function create(req, res, next) {
    try {
        const ingredient = await Ingredients.create(req.body)
        res.json(ingredient)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}

//delete
async function remove(req, res, next) {
    try {
        const ingredient = await Ingredients.findById(req.params.id)
        ingredient.deleteOne()
        res.sendStatus(204)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}
//update
async function update(req, res, next) {
    try {
        const ingredient = await Ingredients.findById(req.params.id)
        ingredient.updateOne(req.body.ingredient)
        res.sendStatus(204)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}

module.exports = {show, create, remove, update}