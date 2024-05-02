import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { registration } from "../http/userAPI";

export const RegForm = ({ setModal, setAuthModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
    const userData = await registration(
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.password
    );

    setModal(false);
    setAuthModal(true);
  };

  return (
    <form
      className="flex-20 flex-col"
      style={{ width: "100%" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register("firstName", {
          required: true,
        })}
        placeholder={"Имя"}
        aria-invalid={errors.firstName}
        error={errors.firstName}
      />
      <Input
        register={register("lastName", {
          required: true,
        })}
        placeholder={"Фамилия"}
        aria-invalid={errors.lastName}
        error={errors.lastName}
      />
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
        register={register("phone", {
          required: true,
        })}
        type={"tel"}
        placeholder={"Номер телефона"}
        aria-invalid={errors.phone}
        error={errors.phone}
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
