import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./UI/Input";
import { Select } from "./UI/Select";
import { FileInput } from "./UI/FileInput";
import { Button } from "./UI/Button";

export const ProductCreateForm = () => {
  const [files, setFiles] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data = { ...data, files: files };
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
            Категория
          </option>
        </Select>
        <Input
          register={register("characteristic")}
          placeholder={
            "Характеристика: значение характеристики (через точку с запятой)"
          }
          aria-invalid={errors.characteristic}
          error={errors.characteristic}
        />
        <FileInput files={files} setFiles={setFiles} />
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
