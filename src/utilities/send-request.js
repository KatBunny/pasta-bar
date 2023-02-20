import { getToken } from "./users-service"

export default async function sendRequest(url, method="GET", payload=null) {
    const options = { method }
    if (payload) {
        options.headers = { "Content-Type": "application/json" }
        options.body = JSON.stringify(payload)
    }  

    const token = getToken()
    //if there's a token, include it in req
    if(token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
    }

    const res = await fetch(url, options) 
    if(res.ok) {
        console.log(res)
        return (res.json())
    } else {
        console.log(res.error)
        throw new Error("Bad Request")
    }
}