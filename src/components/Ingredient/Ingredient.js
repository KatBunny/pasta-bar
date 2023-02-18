// Specific ingredient item
import EditIngredientForm from '../EditIngredientForm/EditIngredientForm'
export default function Ingredient({ingredient}){
    console.log(ingredient)
    return(
        <>
            <h4>Ingredient</h4>
            <EditIngredientForm />
        </>
    )
}