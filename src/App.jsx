import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./router/index.jsx";
import "./App.css";
import { useContext, useEffect } from "react";
import { Context } from "./main.jsx";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const router = createBrowserRouter(routes);
  const { user } = useContext(Context);

  useEffect(() => {
    console.log(Context);
    if (JSON.parse(localStorage.getItem("user"))) {
      user.setUser(JSON.parse(localStorage.getItem("user")));
      user.setIsAuth = true;
    }
  }, []);

  return <RouterProvider router={router} />;
});

export default App;
