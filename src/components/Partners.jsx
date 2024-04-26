import React from "react";
import partner1 from "../assets/img/partner1.png";
import partner2 from "../assets/img/partner2.png";
import partner3 from "../assets/img/partner3.png";
import partner4 from "../assets/img/partner4.png";

export const Partners = () => {
  return (
    <div className="flex-20 flex-col">
      <h2>Наши партнеры</h2>
      <div className="grid-4 grid-4--nwr partners">
        <div className="flex-10 flex-col">
          <picture>
            <img src={partner1} alt="Синди Шерман" />
          </picture>
          <h4 className="partners-name">Синди Шерман</h4>
        </div>
        <div className="flex-10 flex-col">
          <picture>
            <img src={partner2} alt="Джефф Кунс" />
          </picture>
          <h4 className="partners-name">Джефф Кунс</h4>
        </div>
        <div className="flex-10 flex-col">
          <picture>
            <img src={partner3} alt="Марк Куэнн" />
          </picture>
          <h4 className="partners-name">Марк Куэнн</h4>
        </div>
        <div className="flex-10 flex-col">
          <picture>
            <img src={partner4} alt="Герхард Рихтер" />
          </picture>
          <h4 className="partners-name">Герхард Рихтер</h4>
        </div>
      </div>
    </div>
  );
};
