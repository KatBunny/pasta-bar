// on NewOrderPage, build new order

import IngredientList from "../IngredientList/IngredientList";

export default function NewOrderBuilder({newOrder, removeFromOrder, placeOrder, resetOrder, orderTotal}) {

    function handleSubmit(event) {
        //event.preventDefault()
        placeOrder(newOrder)
        resetOrder([])
    }

    return(
        <>
            <h3>Your Order</h3>
            <IngredientList 
                ingredients={newOrder}
                isInNewOrder={true}
                removeFromOrder={removeFromOrder}
            />
            <p>Total cost: ${orderTotal.toFixed(2)}</p>
            <button onClick={handleSubmit} disabled={!newOrder.length}>Place order</button>
        
        </>
    )
}

