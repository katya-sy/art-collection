import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = document.getElementById("portal-root");
  }, []);
  return ref.current ? createPortal(children, ref.current) : null;
};

export default Portal;
