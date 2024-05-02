import { $host } from ".";

export const getAllProducts = async (categorySlug) => {
  const { data } = await $host.get("products", { params: { categorySlug } });
  return data;
};

export const getProduct = async (id) => {
  const { data } = await $host.get("products", { params: { id } });
  console.log("getProduct", data);
  return data;
};

export const getAllCategories = async () => {
  const { data } = await $host.get("categories");
  console.log(data);
  return data;
};

// export const getCategory
