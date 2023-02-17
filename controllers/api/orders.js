//-----Backend Orders Controllers-----//

const Order = require("../../models/order")

//show the user's past orders
async function show(req, res, next) {
    try {
        const orders = await Order.find({user: {$eq: req.user._id}})
        res.json(orders)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}


//create a new order
async function create(req, res, next) {
    try {
        const order = await Order.create(req.body)
        res.json(order)
    } catch (error){
        console.error(error)
        res.status(400).json(error)
    }
}


module.exports = {create, show}