//-----Backend Orders Routes-----//
const express = require("express")
const router = express.Router()

const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Base Route: /api/orders

//Show Past Orders
router.get("/", ensureLoggedIn, ordersCtrl.show)

//Create New Order
router.post("/new", ensureLoggedIn, ordersCtrl.create)

module.exports = router