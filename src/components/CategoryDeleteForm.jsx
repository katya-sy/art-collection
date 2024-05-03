import { useForm } from "react-hook-form";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { Select } from "./UI/Select";
import { useCategoryStore } from "../store";
import { useEffect, useState } from "react";

export const CategoryDeleteForm = () => {
  const { register, handleSubmit, reset, clearErrors } = useForm();
  const categoriesFromStore = useCategoryStore((state) => state.categories);
  const [categories, setCategories] = useState(categoriesFromStore);

  useEffect(() => {
    setCategories(categoriesFromStore);

    console.log("categories", categories);
  }, [categoriesFromStore]);

  const onSubmit = (data) => {
    console.log(data);
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
