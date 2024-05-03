import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home.jsx";
import { Catalog } from "./pages/Catalog.jsx";
import { List } from "./pages/List.jsx";
import { Product } from "./pages/Product.jsx";
import { Purchase } from "./pages/Purchase.jsx";
import { Admin } from "./pages/Admin.jsx";
import { useCategoryStore, useUserStore } from "./store/index.js";
import { getAllCategories } from "./http/productAPI.js";
import { ScrollToTop } from "./components/ScrollToTop.jsx";

const App = () => {
  const updateUser = useUserStore((state) => state.updateUser);
  const updateAuth = useUserStore((state) => state.updateAuth);
  const updateCategories = useCategoryStore((state) => state.updateCategories);
  const isAuth = useUserStore((state) => state.isAuth);
  const isChecked = useUserStore((state) => state.isChecked);
  const updateChecked = useUserStore((state) => state.updateChecked);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      updateUser(JSON.parse(localStorage.getItem("user")));
      updateAuth(true);
    }

    updateChecked(true);

    const fetchData = async () => {
      const data = await getAllCategories();
      updateCategories(data);
      console.log(data);
    };

    fetchData();
  }, []);

  if (isChecked) {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category/:categorySlug" element={<List />} />
          <Route path="/product/:id" element={<Product />} />
          {isAuth ? (
            <>
              <Route path="/purchase/:id" element={<Purchase />} />
              <Route path="/admin" element={<Admin />} />
            </>
          ) : (
            <>
              <Route path="/purchase/:id" element={<Navigate to="/" />} />
              <Route path="/admin" element={<Navigate to="/" />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
