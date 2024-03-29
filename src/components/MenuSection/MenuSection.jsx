import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MenuSection.css";
import MenuCard from "../MenuCard/MenuCard";
import OrderItem from "../OrderItem/OrderItem";
// import { fetchDataFromApi } from "../../utils/api";
import { fetchItems } from "../../slices/MenuSlice";
import Spinner from "../Spinner/Spinner";
import Carousel from "../Carousel/Carousel";

const MenuSection = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { menuItems, loading, error } = useSelector((state) => state.menu);
  const { price, category } = useSelector((state) => state.filters);

  let filteredMenuItems = [];

  filteredMenuItems =
    error == false
      ? menuItems
          .filter((item) => (price == 0 ? true : item.price < price))
          .filter((item) =>
            category == null ? true : item.category == category
          )
      : [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <>
      <h1 style={{margin:'1.5rem 4rem',fontSize:'2.8em'}}>Inspiration for your first order</h1>
      <Carousel imageLinks={["https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"]} />
      <h1 style={{margin:'1.5rem 4rem',fontSize:'2.8em'}}>Top Brands For You</h1>
      <Carousel imageLinks={["https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"]} />
      <div className="menu-section">
        {/* Menu List Starts Here */}
        <div className="menu-leftpart">
          {loading == true ? (
            <Spinner />
          ) : (
            filteredMenuItems?.map((item, key) => (
              <MenuCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
              />
            ))
          )}
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
    </>
  );
};

export default MenuSection;
