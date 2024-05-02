import { $host } from ".";

export const login = async (email, password) => {
  const { data } = await $host.post("login", { email, password });
  localStorage.setItem("user", JSON.stringify(data));
  console.log(data);
  return data;
};
