// on NewOrderPage, build new order
import IngredientList from "../IngredientList/IngredientList";

export default function NewOrderBuilder({newOrder, removeFromOrder, placeOrder, resetOrder, orderTotal}) {

    function handleSubmit(event) {
        placeOrder(newOrder)
        resetOrder([])
    }

    return(
        <div className="new-order-builder-container main-sub">
            <h3 className="order-builder-title">Your Order</h3>
            <div className="order-builder-ingredient-list">
            <IngredientList 
                ingredients={newOrder}
                isInNewOrder={true}
                removeFromOrder={removeFromOrder}
            /></div>
            <p>Total cost: ${orderTotal.toFixed(2)}</p>
            <button onClick={handleSubmit} disabled={!newOrder.length}>Place order</button>
        </div>
    )
}