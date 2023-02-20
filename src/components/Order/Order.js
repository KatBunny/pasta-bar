// Show orders on PastOrdersPage
import "./Order.css"

export default function Order({order}){
    const ingredientItems = order.ingredients.map((ingredient, index) => (<p className="ingredients" key={index}>{ingredient.name}</p>))
    return(
        <div className="order-container">
            <div className="order-container-header">
                <h3>Order: {order._id}</h3>
                <h3>Date: {order.createdDate}</h3>
                <h3>Total Cost: ${order.orderTotal}</h3>
            </div>
            <div className="order-container-body">
                <h3>Ingredients:</h3>
                <div className="order-ingredients-container">
                    {ingredientItems}
                </div>
            </div>
        </div>
    )
}