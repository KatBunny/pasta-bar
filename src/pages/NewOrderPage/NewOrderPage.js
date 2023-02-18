import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import IngredientList from "../../components/IngredientList/IngredientList";
import NewOrderBuilder from "../../components/NewOrderBuilder/NewOrderBuilder";
import * as ordersAPI from "../../utilities/orders-api";

//needs to be sent allIngredients or we
//can filter it in App
export default function NewOrderPage({availableIngredients, user, setUser }) {
    const navigate = useNavigate()    
    // console.log("<<<<NewOrderPage>>>>")
    // console.log(availableIngredients)
    
    // order state
    const [newOrder, setNewOrder] = useState([])
    // test data [{name:"Spaghetti"}]

    // handle function to add ingredient to order when ingredient item is clicked
    // passing to <IngredientList/>
    function handleAddIngredientToOrder(ingredient){
        // [HK] think we need a new api function to add an ingredient to a order
        // const order = await ordersAPI.create(ingredientId)
        // setNewOrder(order)
        setNewOrder([...newOrder, ingredient])
    }
    function handleRemoveIngredientFromOrder(ingredientId) {
        const reducedOrder = newOrder.filter(ingredient => ingredient._id !== ingredientId)
        setNewOrder(reducedOrder)
    }


    // handle function to create finalized order
    async function handlePlaceOrder(ingredientList){
        
        const finalizedOrder = {
            user: user,
            ingredients: ingredientList
        }
        
        await ordersAPI.create(finalizedOrder)
        navigate('/orders')
    }

    return (
        <>
            <h2>New Order Page</h2>
            <IngredientList 
                ingredients={availableIngredients} //change back to availableIngredients
                addToOrder={handleAddIngredientToOrder}
            />
            <NewOrderBuilder
                newOrder={newOrder}
                removeFromOrder={handleRemoveIngredientFromOrder}
                placeOrder={handlePlaceOrder}
            />
        </>
    )

}

