import PastOrdersList from "../../components/PastOrdersList/PastOrdersList"
import * as ordersAPI from "../../utilities/orders-api"

export default function PastOrdersPage(){
    const myOrders = []

    async function getOrders(){
        myOrders.push(await ordersAPI.show())
    }
    
    getOrders()

    return(
        <>
            <p>Past orders page</p>
            <PastOrdersList myOrders={myOrders}/>
        </>
    )
} 