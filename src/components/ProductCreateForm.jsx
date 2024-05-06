import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./UI/Input";
import { Select } from "./UI/Select";
import { FileInput } from "./UI/FileInput";
import { Button } from "./UI/Button";
import { useCategoryStore } from "../store";
import { createProduct } from "../http/productAPI";

export const ProductCreateForm = () => {
  const [files, setFiles] = useState([]);
  const categoriesFromStore = useCategoryStore((state) => state.categories);
  const [categories, setCategories] = useState(categoriesFromStore);
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setCategories(categoriesFromStore);

    console.log("categories", categories);
  }, [categoriesFromStore]);

  const stringToObject = (str) => {
    let obj = {};
    const pairs = str.split(";");

    pairs.forEach((pair) => {
      const keyValue = pair.split(":");
      const key = keyValue[0].trim();
      const value = keyValue[1].trim();
      obj[key] = value;
    });

    return obj;
  };

  const onSubmit = (data) => {
    data = { ...data, files: files };

    const productData = {
      title: data.title,
      author: data.author,
      price: data.price,
      categoryId: data.category.split(",")[0],
      categorySlug: data.category.split(",")[1],
      specifications: stringToObject(data.characteristic),
      image: data.image,
    };

    console.log(productData);
    createProduct({ ...productData });
    reset();
  };

  const resetForm = () => {
    reset(undefined);
    clearErrors();
  };

  return (
    <form className="flex-30 flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-20 flex-col">
        <Input
          register={register("title", {
            required: true,
          })}
          placeholder={"Название"}
          aria-invalid={errors.title}
          error={errors.title}
        />
        <Input
          register={register("author", {
            required: true,
          })}
          placeholder={"Автор"}
          aria-invalid={errors.author}
          error={errors.author}
        />
        <Input
          register={register("price", {
            required: true,
            pattern: {
              value: /^\d/,
              message: "Цена должна быть числом",
            },
          })}
          placeholder={"Цена"}
          aria-invalid={errors.price}
          error={errors.price}
        />
        <Select
          defaultValue="default"
          register={register("category", { required: true })}
        >
          <option value="default" disabled>
            Выберите категорию
          </option>
          {categories &&
            categories.newCategory?.map((category) => (
              <option key={category.id} value={[category.id, category.slug]}>
                {category.name}
              </option>
            ))}
        </Select>
        <Input
          register={register("characteristic")}
          placeholder={
            "Характеристика: значение характеристики (через точку с запятой)"
          }
          aria-invalid={errors.characteristic}
          error={errors.characteristic}
        />
        <Input
          register={register("image")}
          placeholder={"Ссылка на изображение"}
          aria-invalid={errors.image}
          error={errors.image}
        />
        {/* <FileInput files={files} setFiles={setFiles} /> */}
      </div>
      <div className="flex-20 btns">
        <Button type="submit">Сохранить</Button>
        <Button type="button" onClick={resetForm}>
          Отменить
        </Button>
      </div>
    </form>
  );
};
