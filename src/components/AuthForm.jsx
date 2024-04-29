import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";

export const AuthForm = ({ setModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setModal(false);
  };

  return (
    <form
      className="flex-20 flex-col"
      style={{ width: "100%" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register("email", {
          required: true,
        })}
        placeholder={"E-mail"}
        type={"email"}
        aria-invalid={errors.email}
        error={errors.email}
      />
      <Input
        register={register("password", {
          required: true,
          minLength: {
            value: 8,
            message: "Пароль должен быть не менее 8 символов",
          },
        })}
        placeholder={"Пароль"}
        type={"password"}
        aria-invalid={errors.password}
        error={errors.password}
      />
      <Button type="submit">Войти</Button>
    </form>
  );
};
