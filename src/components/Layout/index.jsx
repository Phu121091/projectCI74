import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, isLogin, setIsLogin }) => {
  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      {children}

      <Footer />
    </>
  );
};

export default Layout;