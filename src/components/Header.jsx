import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Input } from "./UI/Input";
import searchImg from "../assets/img/search.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Portal from "./UI/Portal";
import { Modal } from "./UI/Modal";
import { AuthForm } from "./AuthForm";
import { RegForm } from "./RegForm";

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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenRegModal, setIsOpenRegModal] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate("/list");
    setIsOpenMenu(false);
  };

  isOpenMenu && window.innerWidth > 460
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  isOpenModal || isOpenRegModal
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
                <button
                  className="link"
                  onClick={() => setIsOpenMenu((prev) => !prev)}
                >
                  Поиск
                </button>
              </li>
              <li>
                <Link className="link" to="/catalog">
                  Каталог
                </Link>
              </li>
              <li>
                <button
                  className="link"
                  onClick={() => {
                    setIsOpenMenu(false);
                    setIsOpenModal((prev) => !prev);
                  }}
                >
                  Войти
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {isOpenMenu && (
        <div
          className="menu-wrapper"
          onClick={(e) => {
            if (e.target.className === "menu-wrapper")
              setIsOpenMenu((prev) => !prev);
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
      <Modal isOpen={isOpenModal} setModal={setIsOpenModal}>
        <h3>Авторизация</h3>
        <AuthForm setModal={setIsOpenModal} />
        <div className="flex-sb" style={{ width: "100%" }}>
          <button
            className="link c-grey"
            onClick={() => {
              setIsOpenModal((prev) => !prev);
              setIsOpenRegModal((prev) => !prev);
            }}
          >
            Регистрация
          </button>
          <Link className="link c-grey" to="">
            Помощь
          </Link>
        </div>
      </Modal>
      <Modal isOpen={isOpenRegModal} setModal={setIsOpenRegModal}>
        <h3>Регистрация</h3>
        <RegForm setModal={setIsOpenRegModal} />
        <div className="flex-sb" style={{ width: "100%" }}>
          <button
            className="link c-grey"
            onClick={() => {
              setIsOpenModal((prev) => !prev);
              setIsOpenRegModal((prev) => !prev);
            }}
          >
            Авторизация
          </button>
          <Link className="link c-grey" to="">
            Помощь
          </Link>
        </div>
      </Modal>
    </div>
  );
};
