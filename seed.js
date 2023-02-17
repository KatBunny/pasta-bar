require('dotenv').config()
require('.config/database')

const Ingredients = require('./models/ingredient')


;(async function () {
    await Ingredient.deleteMany({})
	const ingredients = await Ingredient.create([
        {name: 'Chicken', price:2, emoji:'🍗'},
        {name:'Seafood',price:2, emoji:'🐟'},
        {name:'Meatball',price:2, emoji:''},
        {name:'Vegetarian Option',price:2, emoji:'🥗'},
        {name:'Broccoli',price:2, emoji:'🥦'},
        {name:'Peppers',price:2, emoji:'🌶️'},
        {name:'Spinach',price:2, emoji:''},
        {name:'Tomato',price:2, emoji:'🍅'},
        {name:'Mushroom',price:2, emoji:'🍄'},
        {name:'Spaghetti',price:2, emoji:'🍝'},
        { name:'Tortellini',price:2, emoji:''},
        {name:'Penne',price:2, emoji:''},
        {name:'Orzo',price:2, emoji:''},
        {name:'Ravioli',price:2, emoji:''},
        
    ])


console.log(ingredients)

process.exit()
})()
 