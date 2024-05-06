import { $host } from ".";

export const getAllProducts = async (
  page,
  limit,
  search,
  categorySlug = null
) => {
  const params = { _page: page, _limit: limit, q: search };
  if (categorySlug) params.categorySlug = categorySlug;

  const { data, headers } = await $host.get("products", {
    params: params,
  });
  return { data, headers };
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

export const createProduct = async ({
  title,
  author,
  price,
  categoryId,
  categorySlug,
  specifications,
  image,
}) => {
  const { data } = await $host.post("products", {
    title,
    author,
    price,
    categoryId,
    categorySlug,
    specifications,
    image,
  });
  return data;
};

export const createCategory = async ({ name, slug }) => {
  const { data } = await $host.post("categories", {
    name,
    slug,
  });
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await $host.delete(`categories/${id}`);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await $host.delete(`products/${id}`);
  return data;
};
