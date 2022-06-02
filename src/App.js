import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Dog from "./pages/Dog";
import Cat from "./pages/Cat";
import Accessory from "./pages/Accessory";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';




const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dog" element={<Dog />} />
          <Route path="cat" element={<Cat />} />
          <Route path="accessory" element={<Accessory />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user" element={<User />} />
          <Route path="log-in" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </BrowserRouter>
  );
};

export default App;