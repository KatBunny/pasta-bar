// Show orders on PastOrdersPage
import "./Order.css"

export default function Order({order}){
    const ingredientItems = order.ingredients.map((ingredient, index) => (<p className="ingredients" key={index}>{ingredient.name}</p>))
    return(
        <div className="order-container">
            <div className="order-container-header">
                <p>Ordered on: {order.createdDate}</p>
                <p>Total Cost: ${order.orderTotal}</p>
            </div>
            <div className="order-container-body">
                <p>Ingredients:</p>
                <div className="order-ingredients-container">
                    {ingredientItems}
                </div>
            </div>
        </div>
    )
}