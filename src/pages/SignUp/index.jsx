import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const SignUp = () => {
  const [user, setUser] = useState({
    userName: "",
    passWord: "",
    buy:[],
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.userName || !user.passWord) {
      toast.error("Xin nhập đầy đủ!!");
      return;
    }
    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    users = [...users, user];

    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Tạo tài khoản thành công!!");
    navigate("../log-in", { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title">SIGN UP</h1>
      <input
        type="text"
        placeholder="User Name"
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Pass Word"
        value={user.passWord}
        onChange={(e) => setUser({ ...user, passWord: e.target.value })}
      />
      <Link to="/log-in"> Already account! Login now..</Link>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
