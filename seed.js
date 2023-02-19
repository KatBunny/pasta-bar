require('dotenv').config()
require('.config/database')

const Ingredients = require('./models/ingredient')


;(async function () {
    await Ingredient.deleteMany({})
	const ingredients = await Ingredient.create([
        {name: 'Chicken', price:'$9.99', emoji:'🍗', isAvailable:true},
        {name:'Seafood',price:'$12.99', emoji:'🐟', isAvailable:true},
        {name:'Meatball',price:'$8.99', emoji:'🧆', isAvailable:true},
        {name:'Eggplant Parmigiano',price:'$8.99', emoji:'🍆', isAvailable:true},
        {name:'Broccoli',price:'$2.99', emoji:'🥦', isAvailable:true},
        {name:'Peppers',price:'$2.99', emoji:'🌶️', isAvailable:true},
        {name:'Spinach',price:'$2.99', emoji:'🥬', isAvailable:true},
        {name:'Tomato',price:'$2.99', emoji:'🍅', isAvailable:true},
        {name:'Mushroom',price:'$2.99', emoji:'🍄', isAvailable:true},
        {name:'Spaghetti',price:'$6.99', emoji:'🍝', isAvailable:true},
        {name:'Tortellini',price:'$6.99', emoji:'image.png', isAvailable:true},
        {name:'Penne',price:'$6.99', emoji:'image.png', isAvailable:true},
        {name:'Orzo',price:'$6.99', emoji:'image.png', isAvailable:true},
        {name:'Ravioli',price:'$6.99', emoji:'image.png', isAvailable:true},
        
    ])


console.log(ingredients)

process.exit()
})()
 