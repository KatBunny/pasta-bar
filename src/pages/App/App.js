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

  useEffect(() => {
    async function getAllIngredients() {
      //console.log('useEffect runs only after first render');
      const ingredients = await ingredientsAPI.show()
      //console.log(ingredients)
      setAllIngredients(ingredients)
    }
    getAllIngredients()
  }, []
  );



  return (
    <main className="App">
  
      {/* terinary for conditional rendering */}
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {user.isAdmin && <Route path="/admin" element={<EditMenuPage />} />}
            {user.isAdmin && <Route path="/*" element={<Navigate to="/admin" />} />}
            <Route path="/orders/new" element={<NewOrderPage allIngredients={{allIngredients}}/>} />
            <Route path="/orders" element={<PastOrdersPage user={user} setUser={setUser}/>} />
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
