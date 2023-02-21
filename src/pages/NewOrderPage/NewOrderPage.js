import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import IngredientList from "../../components/IngredientList/IngredientList";
import NewOrderBuilder from "../../components/NewOrderBuilder/NewOrderBuilder";
import * as ordersAPI from "../../utilities/orders-api";
import "./NewOrderPage.css"

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
    //console.log(newOrder)

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

    //should we move this function to app.js and pass the results down to here? 

    //seeing this warning in react server (npm start)

    //WARNING in [eslint] 
    // src/pages/NewOrderPage/NewOrderPage.js
    // Line 67:8:  React Hook useEffect has a missing dependency: 'setOrderTotal'. Either include it or remove the dependency array. If 'setOrderTotal' changes too often, find the parent component that defines it and wrap that definition in useCallback  react-hooks/exhaustive-deps

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
            <h2>Create your pasta</h2>
            <div className="new-orders-container">
                <div className="available-ingredients-container main-sub">
                    <h3 className="order-builder-title">Available Ingredients</h3>
                    <div className="new-order-ingredient-list">
                        <IngredientList 
                        ingredients={availableIngredients} //change back to availableIngredients
                        addToOrder={handleAddIngredientToOrder}
                        />
                    </div>
                </div>

                <NewOrderBuilder
                    newOrder={newOrder}
                    removeFromOrder={handleRemoveIngredientFromOrder}
                    placeOrder={handlePlaceOrder}
                    resetOrder={setNewOrder}
                    orderTotal={orderTotal}
                />
            </div>
        </>
    )

}

