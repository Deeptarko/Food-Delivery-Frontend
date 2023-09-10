import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import MenuPage from "../MenuPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        {/* <Route path="/username" element={<Profile />}></Route> */}
      </Routes>
    </>
  );
};

export default Router;
