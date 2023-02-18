// Specific ingredient item
import EditIngredientForm from '../EditIngredientForm/EditIngredientForm'
export default function Ingredient({ingredient, user, addToOrder}){
    // console.log("<<<<Ingredient>>>>")
    // console.log(ingredient)
    return(
        <>
            {/* <h4>Ingredient</h4> */}
            <p>{ingredient.name}</p>
            <button onClick={() => addToOrder(ingredient._id)}>➕</button>
            {/* {user.isAdmin && <EditIngredientForm />} */}
        </>
    )
}