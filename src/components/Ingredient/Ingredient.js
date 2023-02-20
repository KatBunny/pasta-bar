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
    getAllAndAvailable
}){

    return(
        <>
            <div>
                <span>{ingredient.name}</span>
                &nbsp;
                <span>${ingredient.price}</span>
            </div>

            {isEditing ?           
                <EditIngredientForm
                    ingredient={ingredient}
                    getAllAndAvailable={getAllAndAvailable}
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