// Show orders on PastOrdersPage

export default function Order({order}){
    //testing 
    const ingredientItems = order.ingredients.map((ingredient, index) => (<p key={index}>{ingredient.name}</p>))
    return(
        <>

            <p>Order: {order._id}</p>
            <p>Total Price: ${order.orderTotal}</p>
            <p>Ingredients:</p>
            {ingredientItems}
        </>
    )
}