import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

const User = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <Outlet />
      <Footer />
    </>
  );
};

export default User;
