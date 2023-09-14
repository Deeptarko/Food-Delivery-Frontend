import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import MenuPage from "../MenuPage";
import Login from "../Auth/Login/Login";
import OrderPage from "../Order/OrderPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        {/* <Route path="/username" element={<Profile />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/orders" element={<OrderPage/>}></Route>
      </Routes>
    </>
  );
};

export default Router;
