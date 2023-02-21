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
        {name: 'Chicken', price:'$9.99', image:'./images/icons/chicken.png', isAvailable:true},
        {name:'Seafood',price:'$12.99', image:'./images/icons/shrimp.png', isAvailable:true},
        {name:'Meatball',price:'$8.99', image:'./images/icons/meatball.png', isAvailable:true},
        {name:'Broccoli',price:'$2.99', image:'./images/icons/broccoli.png', isAvailable:true},
        {name:'Peppers',price:'$2.99', image:'./images/icons/pepper.png', isAvailable:true},
        {name:'Spinach',price:'$2.99', image:'./images/icons/spinach.png', isAvailable:true},
        {name:'Tomato',price:'$2.99', image:'./images/icons/tomato.png', isAvailable:true},
        {name:'Mushroom',price:'$2.99', image:'./images/icons/mushroom.png', isAvailable:true},
        {name:'Spaghetti',price:'$6.99', image:'./images/icons/spaghetti.jpg', isAvailable:true},
        {name:'Tortellini',price:'$6.99', image:'image.png./images/icons/tortilini.jpg', isAvailable:true},
        {name:'Penne',price:'$6.99', image:'./images/icons/penne.jpg', isAvailable:true},
        {name:'Orzo',price:'$6.99', image:'./images/icons/orzo.png', isAvailable:true},
        {name:'Ravioli',price:'$6.99', image:'./images/icons/ravioli.jpg', isAvailable:true},
        {name:'Alfredo',price:'$6.99', image:'./images/icons/alfredo.png', isAvailable:true},
        {name:'Cauliflower',price:'$6.99', image:'./images/icons/cauliflower.png', isAvailable:true},
        {name:'Cheese Sauce',price:'$6.99', image:'./images/icons/cheesesauce.png', isAvailable:true},
        {name:'Feta',price:'$6.99', image:'./images/icons/feta.png', isAvailable:true},
        {name:'Marinara',price:'$6.99', image:'./images/icons/marinara.png', isAvailable:true},
        {name:'Parmesan',price:'$6.99', image:'./images/icons/parme.jpeg', isAvailable:true},
        {name:'Pecorino',price:'$6.99', image:'./images/icons/pecorino.png', isAvailable:true},
        {name:'Pesto',price:'$6.99', image:'./images/icons/pesto.png', isAvailable:true},
        {name:'Ricotta',price:'$6.99', image:'./images/icons/ricotta.png', isAvailable:true},
        {name:'Spicy Marinara',price:'$6.99', image:'./images/icons/spicymarinara.png', isAvailable:true},

    ])


console.log(ingredients)

process.exit()
})()
 