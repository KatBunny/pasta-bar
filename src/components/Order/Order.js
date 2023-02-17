// Order listing ingredients added


export default function Order({order}){
    return(
        <>
            <p>{order._id}</p>
            <p>{order.ingredients}</p>
        </>
    )
}