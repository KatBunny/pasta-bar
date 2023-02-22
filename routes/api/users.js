//-----Backend User Routes-----//
const express = require("express")
const router = express.Router()

const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Base Route: /api/users

// Sign Up
router.post('/', usersCtrl.create)

// Login
router.post("/login", usersCtrl.login)

//Check Token
router.get("/check-token", usersCtrl.checkToken)
//ensureLoggedIn,

module.exports = router