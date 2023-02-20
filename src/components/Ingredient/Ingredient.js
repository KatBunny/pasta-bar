// Specific ingredient item
import { useState } from 'react'
import EditIngredientForm from '../EditIngredientForm/EditIngredientForm'
import "./Ingredient.css"
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
            <div className='ingredient-container'>
            <div>
                <h4>{ingredient.name}</h4>
                <p>${ingredient.price}</p>
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
            </div>
        </>
    )
}