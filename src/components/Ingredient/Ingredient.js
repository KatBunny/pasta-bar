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
        
            <div className='ingredient-container ingredient-card'>
                <div className='inline'>
                <h3 className='h3'>{ingredient.name}</h3>
                <p className='price'>$ {ingredient.price}</p>
                </div>

            {isEditing ?           
                <EditIngredientForm
                    ingredient={ingredient}
                    getAllAndAvailable={getAllAndAvailable}
                />
                :
                isInNewOrder ?
                    <button className="btn-delete" onClick={() => removeFromOrder(ingredient._id)}>➖</button>
                    :
                    <button onClick={() => addToOrder(ingredient._id)}>➕</button>
            }
        </div>
    )
}