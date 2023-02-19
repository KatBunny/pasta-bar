// Form to update ingredient

import { useState } from "react"
import * as ingredientsAPI from "../../utilities/ingredients-api"

export default function EditIngredientForm({ingredient}){
    const [editedIngredient, setEditedIngredient] = useState({
        name: ingredient.name,
        emoji: ingredient.emoji,
        price: ingredient.price,
        isAvailable: ingredient.isAvailable
    })


    function handleChange(event) {
        setEditedIngredient({
            [event.target.name]: event.target.value,
        })
    }

    

    return (
        <form autoComplete="off" /*onSubmit={}*/>
            <label>Ingredient Name</label>
            <input
                type="text"
                name="name"
                placeholder="Name" 
                value={editedIngredient.name}
                onChange={handleChange}
            />
            <label>Ingredient Image</label>
            <input 
                type="text"
                name="emoji"
                placeholder="Image" 
                value={editedIngredient.emoji}
                onChange={handleChange}
            />
            <label>Ingredient Price</label>
            <input 
                type="number"
                name="price"
                placeholder="Price" 
                value={editedIngredient.price}
                onChange={handleChange}
            />
            <label>Available</label>
            <input 
                type="checkbox" 
                name="available"
                value={editedIngredient.isAvailable}
                onChange={handleChange}
            />
            <button type="submit">
                Update Ingredient
            </button>
            <button type="submit">
                Delete Ingredient
            </button>
        </form>
    )
}