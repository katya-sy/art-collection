import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store";

export const RequiredAuth = ({ children }) => {
  const isAuth = useUserStore((state) => state.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuth);
    // if (!isAuth) {
    // navigate(-1);
    // return null;
    // }
  });

  return <>{children}</>;
};
