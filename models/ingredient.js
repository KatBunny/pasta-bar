//-----Backend Ingredients Models-----//
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ingredientSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        emoji: String,
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
