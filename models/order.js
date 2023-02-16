//-----Backend Orders Models-----//
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        ingredient: [{
            type: Schema.Types.ObjectId,
            ref: "Ingredient"
        }]
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)

orderSchema.virtual('orderTotal').get(function () {
	return this.lineItems.reduce((total, item) => total + item.extPrice, 0)
})

module.exports = mongoose.model('Order', orderSchema)