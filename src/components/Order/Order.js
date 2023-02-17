// Order listing ingredients added

export default function Order({order}){
    // need to map order.ingredients

    return(
        <>
            <p>{order._id}</p>
            <p>{order.ingredients}</p>
        </>
    )
}