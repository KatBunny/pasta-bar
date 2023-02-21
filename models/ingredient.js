//-----Backend Ingredients Models-----//
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ingredientSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
<<<<<<< HEAD
            default: "default.jpg"
=======
            default: "default-image.jpg"
>>>>>>> main
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        isAvailable: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)

module.exports = mongoose.model('Ingredient', ingredientSchema)
