// Order listing ingredients added

export default function Order({order}){
    const ingredientItems = order.ingredients.map((ingredient, index) => (<p key={index}>{ingredient.name}</p>))
    return(
        <>
            <p>Order: {order._id}</p>
            <p>Ingredients:</p>
            {ingredientItems}
        </>
    )
}