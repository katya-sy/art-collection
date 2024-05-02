import { $host } from ".";

export const getAllProducts = async () => {
  const { data } = await $host.get("products");
  return data;
};

export const getProduct = async (id) => {
  const { data } = await $host.get("products", { params: { id } });
  console.log("getProduct", data);
  return data;
};
