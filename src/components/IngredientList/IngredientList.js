// index all ingredients

import Ingredient from "../Ingredient/Ingredient"
import "./IngredientList.css"

export default function IngredientList({
    ingredients, 
    setAllIngredients,
    addToOrder, 
    removeFromOrder, 
    isInNewOrder, 
    user, 
    isEditing,
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
            ingredients={ingredients}
            setAllIngredients={setAllIngredients}
        />)
    }
    
    return (
        <div className="ingredient-list-container">
            {ingredientsList && ingredientsList}
        </div>
    )
}