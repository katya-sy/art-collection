import { useEffect, useState } from "react";
import { getAllProducts } from "../http/productAPI";
import { ProductItem } from "./ProductItem";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useParams } from "react-router-dom";
import { Pagination } from "./UI/Pagination";
import { useSearchStore } from "../store";

export const ProductList = () => {
  const [products, setProducts] = useState(null);
  const limit = useSearchStore((state) => state.limit);
  const page = useSearchStore((state) => state.page);
  const [totalCount, setTotalCount] = useState(null);
  const { categorySlug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data, headers } = await getAllProducts(page, limit, categorySlug);
      setProducts(data);
      setTotalCount(headers.get("x-total-count"));

      console.log(data);
    };

    fetchData();
    console.log(products);
  }, [categorySlug, page, limit]);

  return (
    <div className="flex-60 flex-col">
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
      <Pagination totalCount={totalCount} />
    </div>
  );
};
