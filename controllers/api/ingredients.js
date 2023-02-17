//-----Backend Ingredients Controllers-----//
const Ingredient = require('../../models/ingredient')

async function index(req, res) {
	const ingredients = await Ingredient.find({}).sort('name').exec()
	// // re-sort based upon the sortOrder of the categories
	// // ingredients.sort((a, b) => a.category.sortOrder - b.category.sortOrder)
	res.json(ingredients)
}

async function show(req, res) {
	const ingredient = await Ingredient.findById(req.params.id)
	res.json(ingredient)
}

module.exports = {
	index,
	show,
}