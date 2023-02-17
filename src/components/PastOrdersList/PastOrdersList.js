// shows all (past) orders into PastOrdersPage
import Order from "../Order/Order"

export default function PastOrdersList({ user, setUser, myOrders }){

    // map myOrders
    const myOrderItem = myOrders.map((myOrder, index) => (<Order order={myOrder}/>))

    return(
        <>
            <Order order={myOrderItem}/>
        </>
    )
}