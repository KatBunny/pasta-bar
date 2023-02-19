// Show orders on PastOrdersPage

export default function Order({order}){
    const ingredientItems = order.ingredients.map((ingredient, index) => (<p key={index}>{ingredient.name}</p>))

    // need a virtual method to convert createdAt date to Month Date, Year

    return(
        <>
            <p>Order: {order.createdAt}</p>
            <p>Total Price: ${order.orderTotal.toFixed(2)}</p>
            <p>Ingredients:</p>
            {ingredientItems}
        </>
    )
}