import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";

/** Pages */
import Home from "../pages/Home";
import Details from "../pages/Details";

/** Application Main Routing between MFEs */
export const AppRouter = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route index element={<Home />}/>
      <Route path={`/product/:productId`} element={<Details />}/>
    </Routes>
  );
};
