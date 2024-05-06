import { useForm } from "react-hook-form";
import { Button } from "./UI/Button";
import { Select } from "./UI/Select";
import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../http/productAPI";

export const ProductDeleteForm = () => {
  const { register, handleSubmit, reset, clearErrors } = useForm();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllProducts();
      setProducts(data);
      console.log(data);
    };

    fetchData();
    console.log(products);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    deleteProduct(data.product);
    reset();
  };

  const resetForm = () => {
    reset(undefined);
    clearErrors();
  };

  return (
    <form className="flex-30 flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-20 flex-col">
        <Select
          defaultValue="default"
          register={register("product", { required: true })}
        >
          <option value="default" disabled>
            Выберите товар
          </option>
          {products &&
            products?.map((product) => (
              <option key={product.id} value={product.id}>
                {`${product.title} (${product.author})`}
              </option>
            ))}
        </Select>
      </div>
      <div className="flex-20 btns">
        <Button type="submit">Удалить</Button>
        <Button type="button" onClick={resetForm}>
          Отменить
        </Button>
      </div>
    </form>
  );
};
