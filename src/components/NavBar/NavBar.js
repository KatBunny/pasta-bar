import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import "./NavBar.css"
 
export default function NavBar({user, setUser, order, resetOrder}) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
        resetOrder([])
    }

    return(
        <nav className="NavBar">
            <div className="design">
            <h1 className="title">iPasta!</h1>
             <h2><span>Welcome, {user.name}!</span></h2>
            &nbsp;  &nbsp;
            <h3><Link to="/orders" className="links">Past Orders</Link></h3>
            &nbsp;
            <h3><Link to="/orders/new" className="links">New Order</Link></h3>
            &nbsp;
            {user.isAdmin && <Link to="/edit-menu" className="links">Edit Menu &nbsp;</Link> } 
            {/* <span>Welcome, {user.name}!</span>
            &nbsp;  &nbsp; */}
            <h3><Link to="" onClick={handleLogOut} className="links">Log Out</Link></h3>
            &nbsp;
            <span className="icon">{user.name.charAt(0).toUpperCase()}</span>
            </div>
        </nav>
    )
}