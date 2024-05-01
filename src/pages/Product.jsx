import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import img1 from "../assets/img/img1.png";
import { Button } from "./../components/UI/Button";
import { ProductInfo } from "../components/ProductInfo";
import { ProductSpecific } from "../components/ProductSpecific";

export const Product = () => {
  const product = {
    img: img1,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
    id: 1,
    specific: {
      Размер: "280x360 см",
      Материалы: "Холст, масло",
      "Дата создания": "2016 год",
      Жанр: "Абстракционизм",
    },
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="wrapper">
          <ProductInfo product={product} />
          <ProductSpecific specific={product.specific} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
