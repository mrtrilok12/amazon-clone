import React from "react";
import BasketItem from "./BasketItem";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div className="checkout__basket">
            <h4>{user?.email}</h4>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {basket?.map((item, index) => (
              <BasketItem
                key={index}
                id={item["id"]}
                title={item["title"]}
                image={item["image"]}
                price={item["price"]}
                rating={item["rating"]}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
