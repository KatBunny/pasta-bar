import { useState } from "react"
import * as ingredientsAPI from "../../utilities/ingredients-api"

export default function AddIngredientForm(){
    
    const [newIngredient, setNewIngredient] = useState({
        name: "New Ingredient",
        // emoji: "",
        price: 0.00,
        isAvailable: true
    })

    function handleChange(event) {
        setNewIngredient({
            ...newIngredient,
            [event.target.name]: event.target.value
        })
    }

    function handleCheck(event) {
        setNewIngredient({
            ...newIngredient,
            [event.target.name]: !newIngredient.isAvailable
        })
    }

    async function handleCreateIngredient(event) {
        event.preventDefault()
        console.log(newIngredient)
        await ingredientsAPI.create(newIngredient)
        
        //RE-RENDER THE LIST
    }


    return (
        <form autoComplete="off">
            <label>Ingredient Name</label>
            <input 
                type="text"
                name="name"
                placeholder="Name" 
                value={newIngredient.name}
                onChange={handleChange}
            />
            {/* <label>Ingredient Image</label>
            <input 
                type="text"
                name="emoji"
                placeholder="Emoji"
            /> */}
            <label>Ingredient Price</label>
            <input 
                type="number"
                name="price"
                placeholder="Price" 
                value={newIngredient.price}
                onChange={handleChange}
            />
            <label>Available</label>
            <input 
                type="checkbox"
                name="isAvailable"
                checked={newIngredient.isAvailable}
                onChange={handleCheck}
            />
            <button type="submit" onClick={handleCreateIngredient}>
                Add ingredient
            </button>
        </form>
    )
}