import { useState } from "react";
import IngredientList from "../../components/IngredientList/IngredientList";
import NewOrderBuilder from "../../components/NewOrderBuilder/NewOrderBuilder";

//needs to be sent allIngredients or we
//can filter it in App
export default function NewOrderPage({allIngredients}) {
    
    console.log("<<<<NewOrderPage>>>>")
    console.log(allIngredients)

    //const availableIngredients = allIngredients
    //allIngredients.filter(ingredient => ingredient.isAvailable)
    const [newOrder, setNewOrder] = useState([{name:"Spaghetti"}])
   



    return (
        <>
            <h2>New Order Page</h2>
            <IngredientList 
                ingredients={allIngredients} //change back to availableIngredients
                setNewOrder={setNewOrder}
            />
            <NewOrderBuilder
                newOrder={newOrder}
                setNewOrder={setNewOrder}
            />
        </>
    )

}

