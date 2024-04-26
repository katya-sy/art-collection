import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductList } from "../components/ProductList";

export const List = () => {
  const pagination = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      <Header />
      <div className="container">
        <div className="wrapper">
          <ProductList />
          <div className="flex-20 flex-jcc">
            {pagination.map((item) => (
              <button key={item} className="pagination">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
