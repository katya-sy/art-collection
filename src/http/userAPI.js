import { $host } from ".";

export const login = async (email, password) => {
  const { data } = await $host.post("login", { email, password });
  localStorage.setItem("user", JSON.stringify(data));
  console.log(data);
  return data;
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
