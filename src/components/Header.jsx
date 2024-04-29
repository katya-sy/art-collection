import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Input } from "./UI/Input";
import searchImg from "../assets/img/search.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const categories = [
    "Живопись",
    "Скульптура",
    "Графика",
    "Гравюра и литография",
    "Керамика",
    "Мозаика и стеклянные работы",
    "Фотоработы",
    "Абстрактное искусство",
  ];
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate("/list");
    setIsOpenMenu(false);
  };

  const toggleMenu = (prev) => setIsOpenMenu(!prev);

  isOpenMenu && window.innerWidth > 460
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div style={{ position: "relative" }}>
      <div className="bg-black p-v-30">
        <div className="container flex-sb flex-bl header">
          <Link to="/">
            <img src={logo} alt="Логотип" width={270} height={59} />
          </Link>
          <nav>
            <ul className="flex-20">
              <li>
                <button className="link" onClick={() => toggleMenu(isOpenMenu)}>
                  Поиск
                </button>
              </li>
              <li>
                <Link className="link" to="/catalog">
                  Каталог
                </Link>
              </li>
              <li>
                <Link className="link" to="">
                  Войти
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {isOpenMenu && (
        <div
          className="menu-wrapper"
          onClick={(e) => {
            if (e.target.className === "menu-wrapper") {
              toggleMenu(isOpenMenu);
            }
          }}
        >
          <div className="p-v-30 menu">
            <div className="container flex-45 flex-col">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex-20 search-wrapper"
              >
                <Input register={register("search")} placeholder={"Поиск..."} />
                <button type="submit" className="btn btn-icon">
                  <img src={searchImg} />
                </button>
              </form>
              <ul className="grid-4" style={{ gap: 20 }}>
                {categories.map((category) => (
                  <li key={category}>
                    <Link className="link c-black" to={"/list"}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
