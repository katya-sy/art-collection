import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import { ProductItem } from "./ProductItem";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const products = [
  {
    img: img1,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
  {
    img: img2,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
  {
    img: img3,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
  {
    img: img4,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
  {
    img: img4,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
  {
    img: img4,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
  {
    img: img3,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
  {
    img: img3,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
  {
    img: img1,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
  {
    img: img2,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
  {
    img: img3,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
  {
    img: img4,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: 1900000,
  },
];

export const ProductList = () => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 320: 1, 400: 2, 768: 3, 1024: 4 }}
    >
      <Masonry gutter="40px 20px">
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
      </Masonry>
    </ResponsiveMasonry>
  );
};
