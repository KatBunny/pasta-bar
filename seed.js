//run in terminal with: node seed.js

//this will wipe out all orders and ingredients from the db
//and load up the initial set of ingredients

require('dotenv').config()
require("./config/database")

const Ingredients = require('./models/ingredient')
const Orders = require("./models/order")

;(async function () {
    await Orders.deleteMany({})
    await Ingredients.deleteMany({})
	const ingredients = await Ingredients.create([
        {name:'Chicken', price: 9.99, image:'chicken.png', isAvailable:true},
        {name:'Seafood',price:12.99, image:'shrimp.png', isAvailable:true},
        {name:'Meatball',price:8.99, image:'meatball.png', isAvailable:true},
        {name:'Broccoli',price: 2.99, image:'broccoli.png', isAvailable:true},
        {name:'Peppers',price: 2.99, image:'pepper.png', isAvailable:true},
        {name:'Spinach',price: 2.99, image:'spinach.png', isAvailable:true},
        {name:'Tomato',price: 2.99, image:'tomato.png', isAvailable:true},
        {name:'Mushroom',price: 2.99, image:'mushroom.png', isAvailable:true},
        {name:'Spaghetti',price: 6.99, image:'spaghetti.jpg', isAvailable:true},
        {name:'Tortellini',price: 6.99, image:'tortilini.jpg', isAvailable:true},
        {name:'Penne',price: 6.99, image:'penne.jpg', isAvailable:true},
        {name:'Orzo',price: 6.99, image:'orzo.png', isAvailable:true},
        {name:'Ravioli',price: 6.99, image:'ravioli.jpg', isAvailable:true},
        {name:'Alfredo',price: 4.99, image:'alfredo.png', isAvailable:true},
        {name:'Cauliflower',price: 2.99, image:'cauliflower.png', isAvailable:true},
        {name:'Cheese Sauce',price: 4.99, image:'alfredo.png', isAvailable:true},
        {name:'Feta',price: 4.99, image:'feta.png', isAvailable:true},
        {name:'Marinara',price: 3.99, image:'marinara.png', isAvailable:true},
        {name:'Parmesan',price: 4.99, image:'parme.jpeg', isAvailable:true},
        {name:'Pecorino',price: 5.99, image:'pecorino.png', isAvailable:true},
        {name:'Pesto',price: 4.99, image:'pesto.png', isAvailable:true},
        {name:'Ricotta',price: 4.99, image:'ricotta.png', isAvailable:true},
        {name:'Spicy Marinara',price: 3.99, image:'spicymarinara.png', isAvailable:true},
    ])

process.exit()
})()
 