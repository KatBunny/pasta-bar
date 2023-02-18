// on NewOrderPage, build new order

import IngredientList from "../IngredientList/IngredientList";

export default function NewOrderBuilder({newOrder, removeFromOrder, placeOrder}) {

    function handleSubmit(event) {
        //event.preventDefault()
        placeOrder(newOrder)
    }

    return(
        <>
            <h3>Your Order</h3>
            <IngredientList 
                ingredients={newOrder}
                isInNewOrder={true}
                removeFromOrder={removeFromOrder}
            />
            <button onClick={handleSubmit} disabled={!newOrder.length}>Place order</button>
        
        </>
    )
}

