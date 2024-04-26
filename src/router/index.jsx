import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { List } from "../pages/List";
import { Product } from "../pages/Product";
import { Purchase } from "../pages/Purchase";
import { Admin } from "../pages/Admin";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/purchase",
    element: <Purchase />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
];
