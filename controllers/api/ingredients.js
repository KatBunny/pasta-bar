//-----Backend Ingredients Controllers-----//
const Ingredients = require("../../models/ingredient")

//show all
async function show(req, res, next) {
    try {
        const ingredients = await Ingredients.find({})
        //DO WE NEED TO ADD A STATUS TO THIS RES?
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
        res.status(201).json(ingredient)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}

//delete
async function remove(req, res, next) {
    try {
        const ingredient = await Ingredients.findById(req.params.id)
        if(ingredient) {
            await Ingredients.deleteOne({_id: {$eq: req.params.id}})
        } else {
            throw new Error(404)
        }
        res.sendStatus(204)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}

//update
async function update(req, res, next) {
    try {
        //ingredient from db (by ID)
        const ingredient = await Ingredients.findById(req.params.id)

        //new ingredient data
        const newIngredient = req.body

        const blendedData = Object.assign(ingredient, newIngredient)

        ingredient.updateOne(blendedData)
        ingredient.save()
        
        res.json(ingredient)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}

module.exports = {show, create, remove, update}