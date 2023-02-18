//-----Frontend Orders API-----//

import sendRequest from './send-request'

const BASE_URL = "/api/orders"


export async function show() {
    return sendRequest(BASE_URL, "GET")
}

// [HK] is this creating a new order object with the ingredients added, or the ingredients to the order?
// let's rename this function to be more explicit what's created. some ideas:
    // adding ingredients to order: addIngredientToOrder
    // create a new order: createOrder, finalizeOrder, or placeOrder
export async function create(orderData) {
    return sendRequest(BASE_URL + "/new", "POST", orderData)
}
