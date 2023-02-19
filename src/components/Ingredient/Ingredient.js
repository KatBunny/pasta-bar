// Specific ingredient item
import EditIngredientForm from '../EditIngredientForm/EditIngredientForm'
export default function Ingredient({
    ingredient, 
    user, 
    addToOrder, 
    removeFromOrder, 
    isInNewOrder, 
    isEditing,
    ingredients,
    setAllIngredients
}){

    return(
        <>
            <div>
                <span>{ingredient.name}</span>
                &nbsp;
                <span>${ingredient.price}</span>
            </div>

            {isEditing ?           
                <EditIngredientForm
                    ingredient={ingredient}
                    ingredients={ingredients}
                    setAllIngredients={setAllIngredients}
                />
                :
                isInNewOrder ?
                    <button onClick={() => removeFromOrder(ingredient._id)}>➖</button>
                    :
                    <button onClick={() => addToOrder(ingredient._id)}>➕</button>
            }
        </>
    )
}