import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MenuSection.css";
import MenuCard from "../MenuCard/MenuCard";
import OrderItem from "../OrderItem/OrderItem";
import { fetchDataFromApi } from "../../utils/api";
import { fetchItems } from "../../slices/MenuSlice";

const MenuSection = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { menuItems, loading, error } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="menu-section">

      {/* Menu List Starts Here */}
      <div className="menu-leftpart">
        {loading == true
          ? "Loading"
          : menuItems.map((item, key) => <MenuCard key={key} />)}
      </div>

       {/* Cart Item List Starts Here */}
       
      <div className="menu-rightpart">
        <div className="orders">
          <span>Current Orders</span>
        </div>
        <div className="order-items">
          {cartItems.length > 0
            ? cartItems.map((cartItem, idx) => (
                <OrderItem
                  name={cartItem.name}
                  quantity={cartItem.quantity}
                  price={cartItem.price}
                  key={idx}
                />
              ))
            : "Loading"}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
