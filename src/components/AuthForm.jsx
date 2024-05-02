import { useForm } from "react-hook-form";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { login } from "../http/userAPI";
import { useUserStore } from "../store";

export const AuthForm = ({ setModal }) => {
  const updateAuth = useUserStore((state) => state.updateAuth);
  const updateUser = useUserStore((state) => state.updateUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
    const userData = await login(data.email, data.password);

    if (userData) {
      updateAuth(true);
      updateUser(userData);
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
};
