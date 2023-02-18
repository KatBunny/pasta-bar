// index all ingredients

import Ingredient from "../Ingredient/Ingredient"


export default function IngredientList({ingredients}){
    
    console.log(ingredients)
    let ingredientsList = []
    if(ingredients && ingredients.length > 0) {
        ingredientsList = ingredients.map((ingredient, index) => <Ingredient ingredient={ingredient} key={index}/>)
    }
    console.log(ingredientsList)
    
    return (
        <div>
            {ingredientsList}
        </div>
    )
}