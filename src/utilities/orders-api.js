//-----Frontend Orders API-----//

import sendRequest from './send-request'

const BASE_URL = "/api/orders"


export async function show() {
    return sendRequest(BASE_URL, "GET")
}

// [HK] having hard time following if this is creating a new order object with the ingredients added, or if it's adding ingredients to the order
// let's rename this function to be more clear what is being created. some ideas:
    // addIngredientToOrder
    // createOrder, finalizeOrder, or placeOrder
export async function create(orderData) {
    return sendRequest(BASE_URL + "/new", "POST", orderData)
}
