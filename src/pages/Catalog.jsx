import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useCategoryStore } from "../store";

export const Catalog = () => {
  const categoriesFromStore = useCategoryStore((state) => state.categories);
  const [categories, setCategories] = useState(categoriesFromStore);

  useEffect(() => {
    setCategories(categoriesFromStore);

    console.log("categories", categories);
  }, [categoriesFromStore]);

  console.log("categoriesFromStore", categoriesFromStore);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="wrapper">
          <ul className="grid-4 partners" style={{ gap: 20 }}>
            {categoriesFromStore.newCategory?.map((category) => (
              <li key={category.id}>
                <Link className="category" to={"/category/" + category.slug}>
                  {category.name}
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
