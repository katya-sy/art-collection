import { useEffect, useState } from "react";
import { getAllProducts } from "../http/productAPI";
import { ProductItem } from "./ProductItem";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useParams } from "react-router-dom";

export const ProductList = () => {
  const [products, setProducts] = useState(null);
  const { categorySlug } = useParams();
  console.log("categorySlug", categorySlug);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts(categorySlug);
      setProducts(data);
      console.log(data);
    };

    fetchData();
    console.log(products);
  }, [categorySlug]);

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 320: 1, 400: 2, 768: 3, 1024: 4 }}
    >
      <Masonry gutter="40px 20px">
        {products ? (
          products.map((product) => (
            <ProductItem
              img={product.image}
              title={product.title}
              author={product.author}
              price={product.price}
              id={product.id}
              key={product.id}
            />
          ))
        ) : (
          <div className="c-grey">Loading...</div>
        )}
      </Masonry>
    </ResponsiveMasonry>
  );
};
