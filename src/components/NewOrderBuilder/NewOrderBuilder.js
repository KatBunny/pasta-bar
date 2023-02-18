// on NewOrderPage, build new order

import IngredientList from "../IngredientList/IngredientList";

export default function NewOrderBuilder({newOrder, setNewOrder, placeOrder}) {


    return(
        <>
            <h3>Your Order</h3>
            <IngredientList 
                ingredients={newOrder}
                setNewOrder={setNewOrder} //this is for removing an item
            />
            <button onClick={placeOrder} disabled={!newOrder.length}>Place order</button>
        
        </>
    )
}

