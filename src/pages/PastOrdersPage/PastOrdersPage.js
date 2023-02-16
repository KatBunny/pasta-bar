import {checkToken} from "../../utilities/users-service"

export default function PastOrdersPage() {

    function handleCheckToken() {
        checkToken()
        .then(console.log)
    }

    return (
    <>
        <h2>Past Orders Page</h2>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
    )
}