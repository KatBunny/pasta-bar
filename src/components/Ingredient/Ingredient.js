// Specific ingredient item
import EditIngredientForm from '../EditIngredientForm/EditIngredientForm'
import "./Ingredient.css"

export default function Ingredient({
    ingredient,
    addToOrder, 
    removeFromOrder, 
    isInNewOrder, 
    isEditing,
    getAllAndAvailable
}){

    return(
        <div className='ingredient-container ingredient-card'>
            <div className='ingredient-card-details'>
                <img className='ingredient-image' src={`/images/icons/${ingredient.image}`} alt='Filler Image' />
                <div className="ingredient-name-and-price">
                    <h3 className='ingredient-name'>{ingredient.name}</h3>
                    <p className='ingredient-price'>$ {ingredient.price}</p>
                </div>
                <div>
                {isEditing ?
                    <EditIngredientForm
                        ingredient={ingredient}
                        getAllAndAvailable={getAllAndAvailable}
                    />
                    :
                    isInNewOrder ?
                        <button className="btn-delete" onClick={() => removeFromOrder(ingredient._id)}>➖</button>
                        :
                        <button className='btn-add-order' onClick={() => addToOrder(ingredient._id)}>➕</button>
                }
                </div>
            </div>
        </div>
    )
}