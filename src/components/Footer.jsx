import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-black p-v-30">
      <nav className="container">
        <ul
          className="grid-4 grid-4--nwr"
          style={{ alignItems: "center", gap: 20 }}
        >
          <li>
            <Link className="link" to="/catalog">
              Каталог
            </Link>
          </li>
          <li className="link">Выставки</li>
          <li className="link">Партнерам</li>
          <li className="link">Политика конфиденциальности</li>
        </ul>
      </nav>
    </div>
  );
};
