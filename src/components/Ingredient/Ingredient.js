// Specific ingredient item
import EditIngredientForm from '../EditIngredientForm/EditIngredientForm'
export default function Ingredient({ingredient, user}){
    console.log("<<<<Ingredient>>>>")
    console.log(ingredient)
    return(
        <>
            {/* <h4>Ingredient</h4> */}
            <p>{ingredient.name}</p>
            {/* {user.isAdmin && <EditIngredientForm />} */}
        </>
    )
}