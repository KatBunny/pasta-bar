import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import PastOrdersPage from "../PastOrdersPage/PastOrdersPage";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import EditMenuPage from "../EditMenuPage/EditMenuPage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <h1>iPasta!</h1>
      {/* terinary for conditional rendering */}
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {user.isAdmin && <Route path="/admin" element={<EditMenuPage />} />}
            {user.isAdmin && <Route path="/*" element={<Navigate to="/admin" />} />}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<PastOrdersPage />} />
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
