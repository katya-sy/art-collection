import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { List } from "../pages/List";
import { Product } from "../pages/Product";
import { Purchase } from "../pages/Purchase";
import { Admin } from "../pages/Admin";
import { RequiredAuth } from "./../components/UI/RequiredAuth";

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
    element: (
      <RequiredAuth>
        <Purchase />
      </RequiredAuth>
    ),
  },
  {
    path: "/admin",
    element: (
      <RequiredAuth>
        <Admin />
      </RequiredAuth>
    ),
  },
];
