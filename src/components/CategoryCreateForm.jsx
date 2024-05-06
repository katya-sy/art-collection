import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { createCategory, getAllCategories } from "../http/productAPI";
import { useCategoryStore } from "../store";

export const CategoryCreateForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();
  const updateCategories = useCategoryStore((state) => state.updateCategories);

  const onSubmit = (data) => {
    console.log(data);
    createCategory({ ...data });
    reset();

    const fetchData = async () => {
      const data = await getAllCategories();
      updateCategories(data);
      console.log(data);
    };

    fetchData();
  };

  const resetForm = () => {
    reset(undefined);
    clearErrors();
  };

  return (
    <form className="flex-30 flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-20 flex-col">
        <Input
          register={register("name", {
            required: true,
          })}
          placeholder={"Название"}
          aria-invalid={errors.name}
          error={errors.name}
        />
        <Input
          register={register("slug", {
            required: true,
          })}
          placeholder={"Слаг категории"}
          aria-invalid={errors.slug}
          error={errors.slug}
        />
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
