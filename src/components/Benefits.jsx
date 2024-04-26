import React from "react";
import exhibition from "../assets/img/exhibition.svg";
import exclusive from "../assets/img/exclusive.svg";
import professional from "../assets/img/professional.svg";
import gallery from "../assets/img/gallery.svg";

export const Benefits = () => {
  return (
    <div className="grid-2 grid-2--wrap">
      <div className="flex-20 flex-c benefits">
        <picture className="benefits-img">
          <img src={exhibition} />
        </picture>
        <div className="flex-20 flex-col">
          <h3>Международные выставки</h3>
          <p>
            Компания Art Collection участвует во множестве мировых выставок и
            ярмарок искусства, представляя работы известных художников.
          </p>
        </div>
      </div>
      <div className="flex-20 flex-c benefits">
        <picture className="benefits-img">
          <img src={exclusive} />
        </picture>
        <div className="flex-20 flex-col">
          <h3>Эксклюзивные продажи</h3>
          <p>
            Art Collection специализируется на организации эксклюзивных продаж
            редких и ценных произведений искусства.
          </p>
        </div>
      </div>
      <div className="flex-20 flex-c benefits">
        <picture className="benefits-img">
          <img src={professional} />
        </picture>
        <div className="flex-20 flex-col">
          <h3>Лучшие художники</h3>
          <p>
            Art Collection работает с известными и талантливыми художниками со
            всего мира, чтобы предложить клиентам лучшие произведения.
          </p>
        </div>
      </div>
      <div className="flex-20 flex-c benefits">
        <picture className="benefits-img">
          <img src={gallery} />
        </picture>
        <div className="flex-20 flex-col">
          <h3>Онлайн-галерея</h3>
          <p>
            Art Collection имеет удобную онлайн-галерею, где можно ознакомиться
            с ассортиментом и сделать заказы.
          </p>
        </div>
      </div>
    </div>
  );
};
