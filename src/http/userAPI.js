import { $host } from ".";

export const login = async (email, password) => {
  try {
    const { data } = await $host.post("login", { email, password });

    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
      console.log(data);
      return data;
    } else {
      throw new Error(
        "Неверный логин или пароль. Пожалуйста, проверьте введенные данные."
      );
    }
  } catch (error) {
    if (error.response && error.response.status === 403) {
      alert("Неверный логин и(или) пароль");
    } else {
      console.error("Произошла ошибка при попытке входа:", error.message);
    }
  }
};

export const registration = async (
  firstName,
  lastName,
  email,
  phone,
  password
) => {
  const { data } = await $host.post("users", {
    firstName,
    lastName,
    email,
    phone,
    password,
  });
  console.log(data);
  return data;
};
