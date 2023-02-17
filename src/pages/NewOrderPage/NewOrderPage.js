import { useState } from "react";
import IngredientList from "../../components/IngredientList/IngredientList";
import NewOrderBuilder from "../../components/NewOrderBuilder/NewOrderBuilder";

//needs to be sent allIngredients or we
//can filter it in App
export default function NewOrderPage({allIngredients}) {
    const availableIngredients = allIngredients.filter(ingredient => ingredient.isAvailable)
    const [newOrder, setNewOrder] = useState([])
   

    return (
        <>
            <h2>New Order Page</h2>
            <IngredientList 
                availableIngredients={availableIngredients}
                setNewOrder={setNewOrder}
            />
            <NewOrderBuilder
                newOrder={{newOrder}}
                setNewOrder={setNewOrder}
            />
        </>
    )

}

