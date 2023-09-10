import React from "react";
import "./OrderItem.css";

const OrderItem = ({ name = "Pizza", price = 100, quantity = 1 }) => {
  return (
    <>
      {name.length > 0 && (
        <div className="order-item">
          <div className="order-item-details">
            <img
              src="https://cdn.pixabay.com/photo/2018/04/07/15/03/pizza-3298685_1280.jpg"
              alt=""
            />
            <span className="order-item-name">Name -{name}</span>
          </div>
          <span className="order-item-price">Quantity- {quantity}</span>
          <span className="order-item-price">Price - {quantity * price}</span>
        </div>
      )}
    </>
  );
};

export default OrderItem;

