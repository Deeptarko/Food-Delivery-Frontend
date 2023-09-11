import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../slices/CartSlice";
import "./MenuCard.css";
import { GrAdd, GrSubtract } from "react-icons/gr";

const MenuCard = ({
  name = "Pizza",
  price = 100,
  imgLink = "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
  id = null,
}) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(
      addItem({
        id: `${id}`,
        name: `${name}`,
        price: `${price}`,
        quantity: `${quantity + 1}`,
      })
    );
  };

  const decreaseQuantity = () => {
    if (quantity - 1 < 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
      dispatch(
        removeItem({
          id: `${id}`,
          quantity: `${quantity - 1}`,
        })
      );
    }
  };

  return (
    <div className="menu-card">
      <span className="name">Name - {name} </span>
      <div className="item-img">
        <img
          src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
          alt=""
        />
      </div>
      <div className="item-details">
        <span className="price">Price - {price} </span>

        <div className="item-details-calc">
          <GrSubtract className="minus-icon" onClick={decreaseQuantity} />
          <span>{quantity}</span>
          <GrAdd className="plus-icon" onClick={increaseQuantity} />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
