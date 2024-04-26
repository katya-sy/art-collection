import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./UI/Button";

export const ProductItem = ({ img, title, author, price, id }) => {
  const navigate = useNavigate();

  return (
    <div className="flex-20 flex-col">
      <div className="flex-10 flex-col">
        <picture>
          <img src={img} alt={title} />
        </picture>
        <div className="flex-5 flex-col">
          <Link to={"/product/" + id}>
            <h4 className="c-black link product-link">{title}</h4>
          </Link>
          <h5 className="c-grey">{author}</h5>
        </div>
        <h4 className="c-purple">{price} ₽</h4>
      </div>
      <Button size="mini" onClick={() => navigate("/purchase")}>
        Заказать
      </Button>
    </div>
  );
};
