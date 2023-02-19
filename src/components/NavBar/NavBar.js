import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
 
export default function NavBar({user, setUser, order, resetOrder}) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
        resetOrder([])
    }

    return(
        <nav>
            <h1 className="title">iPasta!</h1>
            <Link to="/orders">Past Orders</Link>
            &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp;
            {user.isAdmin && <Link to="/edit-menu">Edit Menu &nbsp;</Link> } 
            {/* <span>Welcome, {user.name}!</span>
            &nbsp;  &nbsp; */}
            <Link to="" onClick={handleLogOut}>Log Out</Link>
            &nbsp;
            
            <span className="icon">{user.name.charAt(0).toUpperCase()}</span>
        </nav>
    )
}