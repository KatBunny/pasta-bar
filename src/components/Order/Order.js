// Order listing ingredients added

export default function Order({order}){
    // need to map order.ingredients

    return(
        <>
            <p>Order: {order._id}</p>
            <p>Ingredients: {order.ingredients}</p>
        </>
    )
}