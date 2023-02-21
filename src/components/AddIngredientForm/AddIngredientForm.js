import { useState } from "react"
import * as ingredientsAPI from "../../utilities/ingredients-api"
import './AddIngredientForm.css'

export default function AddIngredientForm({allIngredients, setAllIngredients, getAllAndAvailable}){
    
    const intialData = {
        name: "New Ingredient",
        // emoji: "",
        price: 0.00,
        isAvailable: true
    }

    const [newIngredient, setNewIngredient] = useState(intialData)

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

        //Add to the DB
        //const createdIngredient = 
        await ingredientsAPI.create(newIngredient)

        //RE-RENDER THE LIST
        getAllAndAvailable()

        //reset form data
        setNewIngredient(intialData)
    }


    return (
        <form className="add-form" autoComplete="off">
            <div className="addie">
            <h3 >Add Ingredient</h3></div>
            <div className="add-formy">
            <label>Name</label>
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
            <label>Price</label>
            <input 
                type="number"
                name="price"
                placeholder="Price" 
                step=".01"
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
            <button className="btn-add" type="submit" onClick={handleCreateIngredient}>
                Add ingredient
            </button>
            </div>
        </form>
    )
}