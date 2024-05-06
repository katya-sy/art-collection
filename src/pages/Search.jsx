import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductItem } from "../components/ProductItem";
import { Pagination } from "../components/UI/Pagination";
import { useSearchStore } from "../store";
import { useEffect, useState } from "react";
import { getAllProducts } from "../http/productAPI";

export const Search = () => {
  const [products, setProducts] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const limit = useSearchStore((state) => state.limit);
  const page = useSearchStore((state) => state.page);
  const search = useSearchStore((state) => state.search);

  useEffect(() => {
    const fetchData = async () => {
      const { data, headers } = await getAllProducts(page, limit, search);
      setProducts(data);
      setTotalCount(headers.get("x-total-count"));

      console.log(data);
    };

    fetchData();
    console.log(products);
  }, [page, limit, search]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="flex-60 flex-col">
            <h3>{`По Вашему запросу "${search}" найдено ${totalCount} товаров`}</h3>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};
