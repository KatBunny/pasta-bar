// index all ingredients

import Ingredient from "../Ingredient/Ingredient"


export default function IngredientList({ingredients, addToOrder, removeFromOrder, isInNewOrder, user, isEditing}){
    // console.log("<<<<IngredientList>>>>")
    // console.log(ingredients)

    let ingredientsList = null

    if(ingredients && ingredients.length > 0) {
        ingredientsList = ingredients.map((ingredient, index) => <Ingredient 
            ingredient={ingredient} 
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
            isInNewOrder={isInNewOrder}
            isEditing={isEditing}
            key={index}
            user={user}
        />)
        // console.log(ingredientsList)
    }
    //console.log(ingredientsList)
    
    return (
        <div>
            {ingredientsList && ingredientsList}
        </div>
    )
}