import { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Input } from "./UI/Input";
import searchImg from "../assets/img/search.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Modal } from "./UI/Modal";
import { AuthForm } from "./AuthForm";
import { RegForm } from "./RegForm";
import { useCategoryStore, useUserStore } from "../store";
import { Button } from "./UI/Button";

export const Header = () => {
  const isAuth = useUserStore((state) => state.isAuth);
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);
  const updateAuth = useUserStore((state) => state.updateAuth);
  const categoriesFromStore = useCategoryStore((state) => state.categories);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenRegModal, setIsOpenRegModal] = useState(false);
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);
  const [categories, setCategories] = useState(categoriesFromStore);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setCategories(categoriesFromStore);

    console.log("categories", categories);
  }, [categoriesFromStore]);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate("/list");
    setIsOpenMenu(false);
  };

  const logout = () => {
    localStorage.removeItem("user");
    updateUser({});
    updateAuth(false);

    setIsOpenLogoutModal(false);
    navigate("/");
  };

  (isOpenMenu && window.innerWidth > 460) || isOpenModal || isOpenRegModal
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
            <ul className="flex-20 flex-c">
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
              {isAuth && (
                <li>
                  <button
                    className="link"
                    onClick={() => {
                      setIsOpenMenu(false);
                      setIsOpenLogoutModal(true);
                    }}
                  >
                    Выход
                  </button>
                </li>
              )}
              <li>
                {isAuth ? (
                  <button
                    className="link c-pink"
                    onClick={() => {
                      setIsOpenMenu(false);
                      setIsOpenModal((prev) => !prev);
                    }}
                  >
                    {`${user?.firstName} ${user?.lastName}`}
                  </button>
                ) : (
                  <button
                    className="link c-pink"
                    onClick={() => {
                      setIsOpenMenu(false);
                      setIsOpenModal((prev) => !prev);
                    }}
                  >
                    Войти
                  </button>
                )}
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
                {categories.newCategory?.map((category) => (
                  <li key={category.id}>
                    <button
                      className="link c-black"
                      onClick={() => {
                        navigate("/category/" + category.slug);
                        setIsOpenMenu(false);
                      }}
                    >
                      {category.name}
                    </button>
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
        <RegForm setModal={setIsOpenRegModal} setAuthModal={setIsOpenModal} />
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
      <Modal isOpen={isOpenLogoutModal} setModal={setIsOpenLogoutModal}>
        <h3>Вы точно хотите выйти из аккаунта?</h3>
        <div className="flex-20" style={{ width: "100%" }}>
          <Button onClick={logout}>Выйти</Button>
          <Button onClick={() => setIsOpenLogoutModal(false)}>Отмена</Button>
        </div>
      </Modal>
    </div>
  );
};
