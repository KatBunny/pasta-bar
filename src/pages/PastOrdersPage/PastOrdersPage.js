import { useState, useEffect } from "react"
import PastOrdersList from "../../components/PastOrdersList/PastOrdersList"
import * as ordersAPI from "../../utilities/orders-api"

export default function PastOrdersPage({ showOrders, setShowOrders }){
    
    useEffect(function(){
        async function getOrders(){
            const orders = await ordersAPI.show()
            setShowOrders(orders)
        }
        getOrders()
    }, [])

    return(
        <div className="past-orders-main-container">
            <h1>Your Order History</h1>
            <PastOrdersList myOrders={showOrders}/>
        </div>
    )
} 