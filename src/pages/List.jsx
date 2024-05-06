import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductList } from "../components/ProductList";

export const List = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="wrapper">
          <ProductList />
        </div>
      </div>
      <Footer />
    </div>
  );
};
