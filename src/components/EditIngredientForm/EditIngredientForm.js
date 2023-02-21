// Form to update ingredient
import { useState } from "react"
import * as ingredientsAPI from "../../utilities/ingredients-api"
import "./EditIngredientForm.css"

export default function EditIngredientForm({ingredient, getAllAndAvailable}){ 
    
    const initialData = {
        _id: ingredient._id,
        name: ingredient.name,
        // emoji: ingredient.emoji,
        price: ingredient.price,
        isAvailable: ingredient.isAvailable
    }

    const [editedIngredient, setEditedIngredient] = useState(initialData)

    function handleChange(event) {
        setEditedIngredient({
            ...editedIngredient,
            [event.target.name]: event.target.value
        })
    }
    function handleCheck(event) {
        setEditedIngredient({
            ...editedIngredient,
            [event.target.name]: !editedIngredient.isAvailable
        })
    }
    async function handleDelete(event) {
        event.preventDefault()

        //Remove from DB
        await ingredientsAPI.remove(ingredient._id)

        //RE-RENDER THE LIST
        getAllAndAvailable()
    }

    async function handleUpdate(event) {
        event.preventDefault()

        //Update the DB
        //const updatedIngredient = 
        await ingredientsAPI.update(ingredient._id, editedIngredient)

        //RE-RENDER THE LIST
        getAllAndAvailable()
        setEditedIngredient(initialData)
    }

    

    return (
        <form className="edit-form" autoComplete="off">
            <div className="inputss">
            <label className="edit-labels">Name</label>
            <input
                type="text"
                name="name"
                placeholder="Name" 
                value={editedIngredient.name}
                onChange={handleChange}
            />
            {/* <label>Ingredient Image</label>
            <input 
                type="text"
                name="emoji"
                placeholder="Image" 
                value={editedIngredient.emoji}
                onChange={handleChange}
            /> */}
            <label>Price</label>
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
                name="isAvailable"
                checked={editedIngredient.isAvailable}
                onChange={handleCheck}
            />
            </div>
            <div className="btnss">
            <button className="btn-edit" type="submit" onClick={handleUpdate}>
                Update Ingredient
            </button>
            <button className="btn-delete" onClick={handleDelete}>
                Delete Ingredient
            </button>
            </div>
        </form>
    )
}