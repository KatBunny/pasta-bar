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
        ingredients: [{
            type: Schema.Types.ObjectId,
            ref: "Ingredient"
        }]
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)

// Total order price
orderSchema.virtual('orderTotal').get(function () {
    return this.ingredients.reduce((total, item) => total + item.price, 0)
})

// Total items quantity on the order
orderSchema.virtual('totalQty').get(function () {
	// return this.ingredients.reduce((total, item) => total + item, 0)
    return this.ingredients.length
})

orderSchema.virtual('orderId').get(function () {
	return this.id.slice(-6).toUpperCase()
})

// Order's created date
orderSchema.virtual('createdDate').get(function () {
        return this.createdAt.toLocaleDateString();

})

// * (!!Delete) We don't have cart as we are not implementing payments function so instead of cart I replaced to order
// Static methods are callable on the Model (Order)
orderSchema.statics.getOrder = function (userId) {
	// 'this' is bound to the model (don't use an arrow function)
	// return the promise that resolves to a cart (the user's unpaid order)
	return this.findOneAndUpdate(
		// query
		{ user: userId },
		// update - in the case the order (cart) is upserted
		{ user: userId },
		// upsert option creates the doc if it doesn't exist!
		{ upsert: true, new: true }
	)
}


// orderSchema.methods.addIngredientToOrder = async function (ingredientId) {
//     const order = this
//     const ingredient = await mongoose.model('Ingredient').findById(ingredientId)
//     order.ingredients.push({ ingredient })
//     return order.save()
// }


module.exports = mongoose.model('Order', orderSchema)