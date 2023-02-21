// Specific ingredient item
import EditIngredientForm from '../EditIngredientForm/EditIngredientForm'
import "./Ingredient.css"
//import Chicken from "../../images/icons/chicken.png"

//import * as icons from "../../images/icons "

//console.log(Chicken)


export default function Ingredient({
    ingredient, 
    user, 
    addToOrder, 
    removeFromOrder, 
    isInNewOrder, 
    isEditing,
    getAllAndAvailable
}){
//../../images/icons/${ingredient.image}



//images/icons/
    return(
        
            <div className='ingredient-container ingredient-card'>
                <div className='inline'>
                <h3 className='h3'>{ingredient.name}</h3>
                <p className='price'>$ {ingredient.price}</p>
                {/* <img src={Chicken} alt=""/> */}
                </div>

            {isEditing ?           
                <EditIngredientForm
                    ingredient={ingredient}
                    getAllAndAvailable={getAllAndAvailable}
                />
                :
                isInNewOrder ?
                    <button onClick={() => removeFromOrder(ingredient._id)}>➖</button>
                    :
                    <button onClick={() => addToOrder(ingredient._id)}>➕</button>
            }
        </div>
    )
}