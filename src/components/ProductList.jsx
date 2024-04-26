import React from "react";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const products = [
    {
      img: img1,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
    {
      img: img2,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
    {
      img: img3,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
    {
      img: img4,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
    {
      img: img4,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
    {
      img: img4,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
    {
      img: img3,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
    {
      img: img3,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
    {
      img: img1,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
    {
      img: img2,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
    {
      img: img3,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
    {
      img: img4,
      title: "Большая зеленая картина",
      author: "Алиханов Хаджи-Мурад",
      price: "1 900 000",
    },
  ];

  return (
    <div className="grid-4">
      {products.map((product, index) => (
        <ProductItem
          img={product.img}
          title={product.title}
          author={product.author}
          price={product.price}
          id={index}
          key={index}
        />
      ))}
    </div>
  );
};
