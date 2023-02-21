//run in terminal with:
//node seed

//this will wipe out all orders and ingredients from the db
//and load up the initial set of ingredients



require('dotenv').config()
require('.config/database')

const Ingredients = require('./models/ingredient')
const Orders = require("./models/order")


;(async function () {
    await Orders.deleteMany({})
    await Ingredients.deleteMany({})
	const ingredients = await Ingredients.create([
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
 