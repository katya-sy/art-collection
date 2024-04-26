import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-black p-v-30">
      <div className="container flex-sb flex-bl header">
        <Link to="/">
          <img src={logo} alt="Логотип" width={270} height={59} />
        </Link>
        <nav>
          <ul className="flex-20">
            <li>
              <button className="link">Поиск</button>
            </li>
            <li>
              <Link className="link" to="/catalog">
                Каталог
              </Link>
            </li>
            <li>
              <Link className="link" to="">
                Личный кабинет
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
