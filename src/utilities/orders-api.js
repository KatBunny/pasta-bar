//-----Frontend Orders API-----//

import sendRequest from './send-request'

const BASE_URL = "/api/orders"


export async function show() {
    return sendRequest(BASE_URL, "GET", orderId)
}

export async function create(orderData) {
    return sendRequest(BASE_URL + "/new", "POST", orderData)
}
