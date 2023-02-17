import { useState, useEffect } from "react"
import PastOrdersList from "../../components/PastOrdersList/PastOrdersList"
import * as ordersAPI from "../../utilities/orders-api"

export default function PastOrdersPage(){
    const [showOrders, setShowOrders] = useState([])

    useEffect(function(){
        async function getOrders(){
            const orders = await ordersAPI.show()
            setShowOrders(orders)
        }
        getOrders()
    }, [])

    return(
        <>
            <p>Your Order History</p>
            <PastOrdersList myOrders={showOrders}/>
        </>
    )
} 