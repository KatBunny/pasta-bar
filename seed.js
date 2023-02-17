require('dotenv').config()
require('.config/database')


//const 
//const
//^^category will be created.


;(async function () {
	await Category.deleteMany({})
const ingredients = await Category.create([
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
    {name:'Tortellini',price:2, emoji:''},
    {name:'Penne',price:2, emoji:''},
    {name:'Orzo',price:2, emoji:''},
    {name:'Ravioli',price:2, emoji:''},


  ])

	await order.deleteMany({})
	const order = await Item.create([
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

})

console.log(items)

process.exit

 