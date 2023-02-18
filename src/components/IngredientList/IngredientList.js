// index all ingredients

import Ingredient from "../Ingredient/Ingredient"


export default function IngredientList({ingredients, user, addToOrder}){
    // console.log("<<<<IngredientList>>>>")
    // console.log(ingredients)

    let ingredientsList = null

    if(ingredients && ingredients.length > 0) {
        ingredientsList = ingredients.map((ingredient, index) => <Ingredient ingredient={ingredient} key={index} user={user} addToOrder={addToOrder}/>)
        // console.log(ingredientsList)
        
    }
    //console.log(ingredientsList)
    
    return (
        <div>
            {ingredientsList && ingredientsList}
        </div>
    )
}