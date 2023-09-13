import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import MenuPage from "../MenuPage";
import Login from "../Auth/Login/Login";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        {/* <Route path="/username" element={<Profile />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default Router;
