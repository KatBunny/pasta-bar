import { useState, useEffect } from "react";
import IngredientList from "../../components/IngredientList/IngredientList";
import NewOrderBuilder from "../../components/NewOrderBuilder/NewOrderBuilder";
import * as ordersAPI from "../../utilities/orders-api";

//needs to be sent allIngredients or we
//can filter it in App
// passing in 'user' and 'setUser' prop to pass down when creating order
export default function NewOrderPage({allIngredients, user, setUser }) {
    
    console.log("<<<<NewOrderPage>>>>")
    console.log(allIngredients)

    //const availableIngredients = allIngredients
    //allIngredients.filter(ingredient => ingredient.isAvailable)
    
    // order state
    const [newOrder, setNewOrder] = useState([])
    // test data [{name:"Spaghetti"}]

    // handle function to add ingredient to order when ingredient item is clicked
    // passing to <IngredientList/>
    async function handleAddIngredientToOrder(ingredientId){
        const order = await ordersAPI.create(ingredientId)
        setNewOrder(order)
    }

    // handle function to create finalized order

    return (
        <>
            <h2>New Order Page</h2>
            <IngredientList 
                ingredients={allIngredients} //change back to availableIngredients
                setNewOrder={setNewOrder}
                addToOrder={handleAddIngredientToOrder}
            />
            <NewOrderBuilder
                newOrder={newOrder}
                setNewOrder={setNewOrder}
            />
        </>
    )

}

