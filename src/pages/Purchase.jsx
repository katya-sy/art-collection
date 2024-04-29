import React from "react";
import img1 from "../assets/img/img1.png";
import { useForm } from "react-hook-form";
import { Input } from "./../components/UI/Input";
import { Textarea } from "./../components/UI/Textarea";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Select } from "../components/UI/Select";

export const Purchase = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const product = {
    img: img1,
    title: "Большая зеленая картина",
    author: "Алиханов Хаджи-Мурад",
    price: "1 900 000",
  };

  const delieveryPrice = "10 000";

  return (
    <>
      <Header />
      <div className="container">
        <div className="wrapper">
          <form className="grid-5-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-60 flex-col">
              <div className="flex-30 flex-col">
                <h2>Адрес доставки</h2>
                <div className="flex-20 flex-col">
                  <Input
                    register={register("address", { required: true })}
                    placeholder={"Город, улица, дом"}
                    aria-invalid={errors.address}
                    error={errors.address}
                  />
                  <div className="grid-4 grid-4-inputs">
                    <Input
                      register={register("entrance", {
                        pattern: {
                          value: /^\d/,
                          message: "Только цифры",
                        },
                      })}
                      placeholder={"Подъезд"}
                      aria-invalid={errors.entrance}
                      error={errors.entrance}
                    />
                    <Input
                      register={register("floor", {
                        pattern: {
                          value: /^\d/,
                          message: "Только цифры",
                        },
                      })}
                      placeholder={"Этаж"}
                      aria-invalid={errors.floor}
                      error={errors.floor}
                    />
                    <Input
                      register={register("apartment", {
                        pattern: {
                          value: /^\d/,
                          message: "Только цифры",
                        },
                      })}
                      placeholder={"Квартира"}
                      aria-invalid={errors.apartment}
                      error={errors.apartment}
                    />
                    <Input
                      register={register("intercom")}
                      placeholder={"Домофон"}
                      aria-invalid={errors.intercom}
                      error={errors.intercom}
                    />
                  </div>
                  <Textarea
                    register={register("comment")}
                    placeholder={"Комментарий курьеру"}
                    aria-invalid={errors.comment}
                    error={errors.comment}
                  />
                </div>
              </div>
              <div className="flex-30 flex-col">
                <h2>Получатель</h2>
                <div className="flex-10 flex-col">
                  <h4>Иванов Иван</h4>
                  <h4>+7 999 999 99 99</h4>
                </div>
                <div className="flex-20 btns">
                  <button type="button" className="btn btn-mini">
                    Добавить телефон
                  </button>
                  <button type="button" className="btn btn-mini">
                    Изменить получателя
                  </button>
                </div>
              </div>
              <div className="flex-30 flex-col">
                <h2>Дата и время доставки</h2>
                <div className="flex-20 btns">
                  <Select
                    defaultValue="default"
                    register={register("date", { required: true })}
                  >
                    <option value="default" disabled>
                      Дата
                    </option>
                  </Select>
                  <Select
                    defaultValue="default"
                    register={register("time", { required: true })}
                  >
                    <option value="default" disabled>
                      Интервал времени
                    </option>
                  </Select>
                </div>
              </div>
              <div className="flex-30 flex-col">
                <h2>Оплата</h2>
                <div className="flex-20 flex-col">
                  <Input
                    register={register("cardNumber", {
                      required: true,
                      pattern: {
                        value: /^\d{16}$/,
                        message: "Номер карты должен содержать 16 цифр",
                      },
                    })}
                    placeholder={"Номер карты"}
                    aria-invalid={errors.cardNumber}
                    error={errors.cardNumber}
                  />
                  <div className="flex-20">
                    <Input
                      register={register("validity", {
                        required: true,
                        pattern: {
                          value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/,
                          message: "Введите дату в формате ДД/ММ",
                        },
                      })}
                      placeholder={"Месяц/год"}
                      aria-invalid={errors.validity}
                      error={errors.validity}
                    />
                    <Input
                      register={register("cvc", {
                        required: true,
                        pattern: {
                          value: /^\d{3}$/,
                          message: "CVC/CVV должен содержать 3 цифры",
                        },
                      })}
                      placeholder={"CVC/CVV"}
                      aria-invalid={errors.cvc}
                      error={errors.cvc}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-45 flex-col">
              <div className="flex-30 flex-col">
                <h2>Заказ</h2>
                <div
                  className="flex-20 flex-c"
                  style={{ flexWrap: "wrap", rowGap: 5 }}
                >
                  <picture style={{ maxWidth: 200 }}>
                    <img src={product.img} alt={product.title} />
                  </picture>
                  <h3>{product.price} ₽</h3>
                </div>
                <div className="grid-2 grid-2-nwr">
                  <h3>Доставка</h3>
                  <h3>{delieveryPrice} ₽</h3>
                </div>
              </div>
              <div className="grid-2 grid-2-nwr">
                <h3>Итого</h3>
                <h2 className="c-purple">
                  {`${
                    +product.price.replace(/\s/g, "") +
                    +delieveryPrice.replace(/\s/g, "")
                  } ₽`}
                </h2>
              </div>
              <button type="submit" className="btn">
                Оформить и оплатить
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
