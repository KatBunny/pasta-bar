// Specific ingredient item
import { useState } from 'react'
import EditIngredientForm from '../EditIngredientForm/EditIngredientForm'
export default function Ingredient({
    ingredient, 
    user, 
    addToOrder, 
    removeFromOrder, 
    isInNewOrder, 
    isEditing,
    ingredients,
    setAllIngredients
}){

    const [thisIngredient, setThisIngredient] = useState(ingredient)

    return(
        <>
            <div>
                <span>{ingredient.name}</span>
                &nbsp;
                <span>${ingredient.price}</span>
            </div>

            {isEditing ?           
                <EditIngredientForm
                    ingredient={thisIngredient}
                    setThisIngredient={setThisIngredient}
                    ingredients={ingredients}
                    setAllIngredients={setAllIngredients}
                />
                :
                isInNewOrder ?
                    <button onClick={() => removeFromOrder(ingredient._id)}>➖</button>
                    :
                    <button onClick={() => addToOrder(ingredient._id)}>➕</button>
            }
        </>
    )
}