// index all ingredients

import Ingredient from "../Ingredient/Ingredient"
import "./IngredientList.css"

export default function IngredientList({
    ingredients, 
    addToOrder, 
    removeFromOrder, 
    isInNewOrder, 
    user, 
    isEditing,
    getAllAndAvailable
}){

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
            getAllAndAvailable={getAllAndAvailable}
        />)
    }
    
    return (
        <div>
            {ingredientsList && ingredientsList}
        </div>
    )
}