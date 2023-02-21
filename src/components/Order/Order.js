// Show orders on PastOrdersPage
import IngredientList from "../IngredientList/IngredientList"
import "./Order.css"

export default function Order({order}){
    const ingredientItems = order.ingredients.map((ingredient, index) => (<div className="ingredients" key={index}>{ingredient.name}</div>))
    
    return(
        <div className="order-container">
            <div className="order-container-header">
                <h3>Ordered on: {order.createdDate}</h3>
                <h3>Total Cost: ${order.orderTotal}</h3>
            </div>
            <div className="order-container-body">
                <h3>Ingredients:</h3>
                <div className="order-ingredients-container">
                    {ingredientItems}
                    {/* <IngredientList className="" ingredients={order.ingredients} /> */}
                </div>
            </div>
        </div>
    )
}