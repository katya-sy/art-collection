import { useContext, useEffect } from "react";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

export const RequiredAuth = observer(({ children }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAuth) {
      navigate(-1);
      return;
    }
  });

  return <>{children}</>;
});
