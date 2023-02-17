// shows all (past) orders into PastOrdersPage
import Order from "../Order/Order"

export default function PastOrdersList({ user, setUser, myOrders }){
    console.log(myOrders)
    // map myOrders
    const myOrderItems = myOrders.map((myOrder, index) => (<Order order={myOrder} key={index}/>))

    return(
        <>
            {myOrderItems}
        </>
    )
}