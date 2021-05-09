import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

function BasketItem({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="basketItem">
      <div className="basketProduct__content">
        <img src={image} className="basketProduct__image" alt="" />
        <div className="basketProduct__info">
          <p className="basketProduct__title">{title}</p>
          <p className="basketProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="basketProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          <button type="button" onClick={removeFromBasket}>
            Remove from Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
