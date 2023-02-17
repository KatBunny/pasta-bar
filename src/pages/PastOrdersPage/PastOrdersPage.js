import PastOrdersList from "../../components/PastOrdersList/PastOrdersList"
import * as ordersAPI from "../../utilities/orders-api"

export default function PastOrdersPage(){
    async function getOrders(){
        return await ordersAPI.show()
    }

    return(
        <>
            <p>Past orders page</p>
            <PastOrdersList myOrders={getOrders()}/>
        </>
    )
} 