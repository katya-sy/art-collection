import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductInfo } from "../components/ProductInfo";
import { ProductSpecific } from "../components/ProductSpecific";
import { getProduct } from "../http/productAPI";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      const data = await getProduct(id);
      setProduct(data[0]);
      console.log(data);
    };

    fetchData();
    console.log("prod", product);
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="wrapper">
          <ProductInfo products={product} />
          <ProductSpecific specific={product?.specifications} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
