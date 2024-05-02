import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store";

export const RequiredAuth = ({ children }) => {
  const isAuth = useUserStore((state) => state.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(-1);
      return;
    }
  });

  return <>{children}</>;
};
