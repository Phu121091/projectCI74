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
import Dogitem from "./pages/Dog/Dogitem";
import Dogdetail from "./pages/Dog/Dogdetail";
import Catitem from "./pages/Cat/Catitem";
import Catdetail from "./pages/Cat/Catdetail";
import Accessitem from "./pages/Accessory/Accessitem";
import Accessdetail from "./pages/Accessory/Accessdetail";
import Carts from "./pages/Accessory/Carts";
import Find from "./pages/Find";
import Condition from "./pages/Support/Condition";
import Confidentialy from "./pages/Support/Confidentialy";
import Restore from "./pages/Support/Restore";
import Warranty from "./pages/Support/Warranty";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';




const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="dog" element={<Dog />} /> */}
				  <Route path="dog" element={<Dog />} />
          <Route path="dogitem" element={<Dogitem />}>
					<Route path=":id" element={<Dogdetail />} />
				  </Route>
          <Route path="cat" element={<Cat />} />
          <Route path="catitem" element={<Catitem />}>
          <Route path=":id" element={<Catdetail />} />
          </Route>
          <Route path="accessory" element={<Accessory />} />
          <Route path="accessitem" element={<Accessitem />}>
          <Route path=":id" element={<Accessdetail />}/>
          </Route>
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user" element={<User />} />
          <Route path="log-in" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="carts" element={<Carts/>} />
          <Route path="find" element={<Find />} />
          <Route path="condition" element={<Condition />} />
          <Route path="confidentialy" element={<Confidentialy />} />
          <Route path="restore" element={<Restore />} />
          <Route path="warranty" element={<Warranty />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </BrowserRouter>
  );
};

export default App;