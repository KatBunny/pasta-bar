import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import IngredientList from "../../components/IngredientList/IngredientList";
import NewOrderBuilder from "../../components/NewOrderBuilder/NewOrderBuilder";
import * as ordersAPI from "../../utilities/orders-api";

//needs to be sent allIngredients or we
//can filter it in App
export default function NewOrderPage({allIngredients, user, setUser }) {
    const navigate = useNavigate()    
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
        // [HK] need new api function to add ingredient to order
        // const order = await ordersAPI.create(ingredientId)
        // setNewOrder(order)
    }

    // handle function to create finalized order
    async function handlePlaceOrder(){
        await ordersAPI.create()
        navigate('/orders')
    }

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
                placeOrder={handlePlaceOrder}
            />
        </>
    )

}

