// Specific ingredient item
import { isEditable } from '@testing-library/user-event/dist/utils'
import { useState } from 'react'
import EditIngredientForm from '../EditIngredientForm/EditIngredientForm'
export default function Ingredient({ingredient, user, addToOrder, removeFromOrder, isInNewOrder, isEditing}){

    return(
        <>
            <div>
                <span>{ingredient.name}</span>
                &nbsp;
                <span>${ingredient.price}</span>
            </div>

            {isEditing ?           
                <EditIngredientForm ingredient={ingredient} />
                :
                isInNewOrder ?
                    <button onClick={() => removeFromOrder(ingredient._id)}>➖</button>
                    :
                    <button onClick={() => addToOrder(ingredient._id)}>➕</button>
            }
        </>
    )
}