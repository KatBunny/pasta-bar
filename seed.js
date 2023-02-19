require('dotenv').config()
require('.config/database')

const Ingredients = require('./models/ingredient')


;(async function () {
    await Ingredient.deleteMany({})
	const ingredients = await Ingredient.create([
        {name: 'Chicken', price:2, emoji:'🍗', isAvailable:true},
        {name:'Seafood',price:2, emoji:'🐟', isAvailable:true},
        {name:'Meatball',price:2, emoji:'', isAvailable:true},
        {name:'Vegetarian Option',price:2, emoji:'🥗', isAvailable:true},
        {name:'Broccoli',price:2, emoji:'🥦', isAvailable:true},
        {name:'Peppers',price:2, emoji:'🌶️', isAvailable:true},
        {name:'Spinach',price:2, emoji:'', isAvailable:true},
        {name:'Tomato',price:2, emoji:'🍅', isAvailable:true},
        {name:'Mushroom',price:2, emoji:'🍄', isAvailable:true},
        {name:'Spaghetti',price:2, emoji:'🍝', isAvailable:true},
        {name:'Tortellini',price:2, emoji:'', isAvailable:true},
        {name:'Penne',price:2, emoji:'', isAvailable:true},
        {name:'Orzo',price:2, emoji:'', isAvailable:true},
        {name:'Ravioli',price:2, emoji:'', isAvailable:true},
        
    ])


console.log(ingredients)

process.exit()
})()
 