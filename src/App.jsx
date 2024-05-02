import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { Home } from "./pages/Home.jsx";
import { Catalog } from "./pages/Catalog.jsx";
import { List } from "./pages/List.jsx";
import { Product } from "./pages/Product.jsx";
import { RequiredAuth } from "./components/UI/RequiredAuth.jsx";
import { Purchase } from "./pages/Purchase.jsx";
import { Admin } from "./pages/Admin.jsx";
import { useUserStore } from "./store/index.js";

const App = () => {
  const updateUser = useUserStore((state) => state.updateUser);
  const updateAuth = useUserStore((state) => state.updateAuth);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      updateUser(JSON.parse(localStorage.getItem("user")));
      updateAuth(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/list" element={<List />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/purchase"
          element={
            <RequiredAuth>
              <Purchase />
            </RequiredAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <RequiredAuth>
              <Admin />
            </RequiredAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
