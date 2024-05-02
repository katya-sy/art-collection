import { useNavigate } from "react-router-dom";
import { Button } from "./UI/Button";

export const ProductInfo = ({ product }) => {
  const navigate = useNavigate();
  console.log(product);

  return (
    <div className="grid-2 grid-2--wr">
      <picture>
        <img src={product?.image} alt={product?.title} />
      </picture>
      <div className="flex-sb flex-col">
        <div className="flex-10 flex-col">
          <h2>{product?.title}</h2>
          <h3 className="c-grey">{product?.author}</h3>
        </div>
        <div className="flex-30 flex-col">
          <h3 className="c-purple">
            {product?.price &&
              Number(product?.price).toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
                minimumFractionDigits: 0,
              })}
          </h3>
          <Button onClick={() => navigate("/purchase/" + product?.id)}>
            Заказать
          </Button>
        </div>
      </div>
    </div>
  );
};
