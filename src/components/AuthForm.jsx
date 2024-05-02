import { useForm } from "react-hook-form";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { login } from "../http/userAPI";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

export const AuthForm = observer(({ setModal }) => {
  const { user } = useContext(Context);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
    login(data.email, data.password);
    if (localStorage.getItem("user")) {
      user.setIsAuth = true;
    }
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
});
