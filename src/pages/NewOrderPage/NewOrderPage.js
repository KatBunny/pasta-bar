import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import IngredientList from "../../components/IngredientList/IngredientList";
import NewOrderBuilder from "../../components/NewOrderBuilder/NewOrderBuilder";
import * as ordersAPI from "../../utilities/orders-api";

//needs to be sent allIngredients or we
//can filter it in App
export default function NewOrderPage({ availableIngredients, newOrder, setNewOrder, user, setUser, orderTotal, setOrderTotal }) {
    const navigate = useNavigate()

    // add ingredient to order when ingredient item is clicked
    function handleAddIngredientToOrder(ingredientId){
        const alreadyExists = newOrder.filter(ingredient => ingredient._id === ingredientId)
        
        //Check if ingredient is already in newOrder
        //const testerIngredient = {_id: ingredientId}
        if(alreadyExists.length === 0)  {
            //actually add the ingredient
            const ingredient = availableIngredients.find(ingredient => ingredient._id === ingredientId)
            setNewOrder([...newOrder, ingredient])
        } else {
            alert("You already have this in your order!")
        }
    }
    console.log(newOrder)

    // remove ingredient from order
    function handleRemoveIngredientFromOrder(ingredientId) {
        const reducedOrder = newOrder.filter(ingredient => ingredient._id !== ingredientId)
        setNewOrder(reducedOrder)
    }

    // create finalized order
    async function handlePlaceOrder(ingredientList){
        const finalizedOrder = {
            user: user,
            ingredients: ingredientList
        }
        
        await ordersAPI.create(finalizedOrder)
        navigate('/orders')
    }

    // order total
    useEffect(function(){
        async function getOrderTotal(){
            let updatedTotal = 0
            newOrder.forEach((ingredient) => {
                updatedTotal += ingredient.price
            })
            setOrderTotal(updatedTotal)
        }
        getOrderTotal()
    }, [newOrder])

    return (
        <>
            <h2>New Order Page</h2>
            <IngredientList 
                ingredients={availableIngredients} //change back to availableIngredients
                addToOrder={handleAddIngredientToOrder}
            />
            <hr />
            <NewOrderBuilder
                newOrder={newOrder}
                removeFromOrder={handleRemoveIngredientFromOrder}
                placeOrder={handlePlaceOrder}
                resetOrder={setNewOrder}
                orderTotal={orderTotal}
            />
        </>
    )

}

