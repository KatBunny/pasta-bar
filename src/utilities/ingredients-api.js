//-----Frontend Ingredients API-----//

import sendRequest from './send-request'

const BASE_URL = "/api/ingredients"


export async function show() {
    return sendRequest(BASE_URL, "GET")
}

export async function create(ingredientData) {
    return sendRequest(BASE_URL + "/new", "POST", ingredientData)
}

export async function remove(ingredientId) {
    return sendRequest(BASE_URL + "/:id", "DELETE", ingredientId)
}

export async function update(ingredientData) {
    return sendRequest(BASE_URL + "/:id", "PATCH", ingredientData)
}
