import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    passWord: "",
  });

  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    if (!user.userName || !user.passWord) {
      toast.error("Username or password isnot correct");
      return;
    }
    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    users.forEach((e) => {
      if (user.userName === e.userName && user.passWord === e.passWord) {
        toast.success("Log in successfully!!");
        navigate("../user", { replace: true });
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
    });
  };
  return (
    <form onSubmit={handleLogIn}>
      <h1 className="title">LOG IN</h1>
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
      <Link to="/sign-up"> Create account now!!!</Link>
      <button type="submit">LOG IN</button>
    </form>
  );
};

export default Login;