import { useForm } from "react-hook-form";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { Select } from "./UI/Select";
import { useCategoryStore } from "../store";
import { useEffect, useState } from "react";
import { deleteCategory, getAllCategories } from "../http/productAPI";

export const CategoryDeleteForm = () => {
  const { register, handleSubmit, reset, clearErrors } = useForm();
  const categoriesFromStore = useCategoryStore((state) => state.categories);
  const [categories, setCategories] = useState(categoriesFromStore);
  const updateCategories = useCategoryStore((state) => state.updateCategories);

  useEffect(() => {
    setCategories(categoriesFromStore);

    console.log("categories", categories);
  }, [categoriesFromStore]);

  const onSubmit = (data) => {
    console.log(data);
    deleteCategory(data.category.split(",")[0]);
    reset();

    setTimeout(() => {
      const fetchData = async () => {
        const data = await getAllCategories();
        updateCategories(data);
        console.log(data);
      };

      fetchData();
    }, 1000);
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
          register={register("category", { required: true })}
        >
          <option value="default" disabled>
            Категория
          </option>
          {categories &&
            categories.newCategory?.map((category) => (
              <option key={category.id} value={[category.id, category.slug]}>
                {category.name}
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
