import React from "react";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import about from "../assets/img/about.png";
import { Benefits } from "../components/Benefits";
import { Partners } from "../components/Partners";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="wrapper">
          <Slider />
          <div className="grid-2 grid-2--wrap">
            <div className="flex-20 flex-col">
              <h2 style={{ maxWidth: 430 }}>
                Коллекция искусства от мировых художников
              </h2>
              <div className="flex-20 flex-col">
                <p>
                  Art Collection - это онлайн-платформа для коллекционеров и
                  ценителей искусства, предлагающая уникальные и качественные
                  предметы искусства. Наша компания специализируется на
                  произведениях искусства различных направлений - от живописи и
                  скульптуры до фоторабот и арт-принтов.
                </p>
                <p>
                  Мы сотрудничаем с талантливыми художниками и мастерскими со
                  всего мира, чтобы предложить нашим клиентам эксклюзивные и
                  уникальные работы. Наша цель - предоставить эксклюзивный
                  доступ к произведениям искусства от ведущих художников с
                  мировым именем.
                </p>
                <p>
                  Art Collection ориентирована на тех, кто ценит настоящее
                  искусство. Мы гарантируем высокое качество товаров и
                  профессиональный сервис для наших клиентов. Покупая у нас, Вы
                  приобретаете настоящее произведение мастеров, которое будет
                  украшать Вашу коллекцию искусства и радовать глаз годами.
                </p>
              </div>
            </div>
            <picture>
              <img src={about} alt="О нас" />
            </picture>
          </div>
          <Benefits />
          <Partners />
        </div>
      </div>

      <Footer />
    </div>
  );
};
