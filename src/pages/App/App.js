import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import PastOrdersPage from "../PastOrdersPage/PastOrdersPage";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import EditMenuPage from "../EditMenuPage/EditMenuPage";
import * as ingredientsAPI from "../../utilities/ingredients-api"

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allIngredients, setAllIngredients] = useState([])
  const [availableIngredients, setAvailableIngredients] = useState([])
  const [newOrder, setNewOrder] = useState([])
  const [showOrders, setShowOrders] = useState([])
  const [orderTotal, setOrderTotal] = useState(0)

  useEffect(function() {
    async function getAllIngredients() {
      //console.log('useEffect runs only after first render');
      const ingredients = await ingredientsAPI.show()
      const listOfAvailable = ingredients.filter(ingredient => ingredient.isAvailable)
      setAllIngredients(ingredients)
      setAvailableIngredients(listOfAvailable)
    }
    getAllIngredients()
  }, []
  );


  return (
    <main className="App">
  
      {/* terinary for conditional rendering */}
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} order={newOrder} resetOrder={setNewOrder}/>
          <Routes>
            {/* {user.isAdmin && <Route path="/admin" element={<EditMenuPage allIngredients={allIngredients} />} />} */}

            {user.isAdmin && <Route path="/edit-menu" element={
              <EditMenuPage
                user={user}
                allIngredients={allIngredients}
                setAllIngredients={setAllIngredients}
              />} />
            }

            {user.isAdmin && <Route path="/*" element={<Navigate to="/edit-menu" />} />}

            <Route path="/orders/new" element={
              <NewOrderPage
                availableIngredients={availableIngredients}
                newOrder={newOrder}
                setNewOrder={setNewOrder}
                user={user}
                setUser={setUser}
                orderTotal={orderTotal}
                setOrderTotal={setOrderTotal}
              />
            } />
            <Route path="/orders" element={
              <PastOrdersPage 
                user={user}
                setUser={setUser}
                showOrders={showOrders}
                setShowOrders={setShowOrders}
              />
            } />
            <Route path="/*" element={<Navigate to="/orders/new" />} />

          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
