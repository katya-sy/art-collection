import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const Catalog = () => {
  const categories = [
    "Живопись",
    "Скульптура",
    "Графика",
    "Гравюра и литография",
    "Керамика",
    "Мозаика и стеклянные работы",
    "Фотоработы",
    "Абстрактное искусство",
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <div className="wrapper">
          <ul className="grid-4 partners" style={{ gap: 20 }}>
            {categories.map((category) => (
              <li key={category}>
                <Link className="category" to={"/list"}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
