//-----Backend Ingredients Routes-----//

const express = require("express")
const router = express.Router()

const ingredientsCtrl = require('../../controllers/api/ingredients');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const ensureIsAdmin = require('../../config/ensureIsAdmin');


// Base Route: /api/ingredients


//Show Ingredients
router.get("/", ingredientsCtrl.show)


////////ensureIsAdmin
//Create New Ingredient 
router.post("/new", ensureLoggedIn, ingredientsCtrl.create)

//Delete (remove) ingredient
router.delete("/:id", ensureLoggedIn, ingredientsCtrl.remove)

//Update Ingredient
router.patch("/:id", ensureLoggedIn, ingredientsCtrl.update)

module.exports = router