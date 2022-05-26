import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./styles.css";
import {FaPaw} from "react-icons/fa";

const Header = () => {
  const handleActive = ({ isActive }) => {
    return isActive && "active";
  };

  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let current = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;
    if (current) {
      setCurrentUser(current);
    } else {
      setCurrentUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("../log-in", { replace: true });
  };

  console.log(currentUser);

  return (
    <div>
    <header>
      <NavLink to="/" className={`logo ${handleActive}`}>
        <img className="imglogo" src="https://www.cdafc.org/wp-content/uploads/2018/10/CDAFC-Dog-Cat-Logo-e1540407791560.png"/>
        <p>Mindx Petshop</p>
      </NavLink>
      <div className="search">
      <input type="text" placeholder="Bạn muốn tìm gì?" className="inputsearch"></input>
      <FaPaw className="iconsearch"/>
      </div>
      <div className="options">
        <ul>
          <li>
            <NavLink to="/user" className={handleActive}>
              User
            </NavLink>
            {currentUser ? (
              <div className="user-info">
                <span className="greet">Hello ,{currentUser.userName}</span>
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <>
                <NavLink to="/log-in" className={handleActive}>
                  Log In
                </NavLink>
                <NavLink to="/sign-up" className={handleActive}>
                  Sign up
                </NavLink>
              </>
            )}
          </li>
        </ul>
      </div>
    </header>
    
      <ul className="menu">
      <li>
        <NavLink to="/" >Trang chủ</NavLink>
      </li>  
      <li>
        <NavLink to="/dog" >Chó</NavLink>
      </li>
      <li>
        <NavLink to="/cat" >Mèo</NavLink>
      </li>
      <li>
        <NavLink to="/accessory" >Phụ kiện</NavLink>
      </li>
      <li>
        <NavLink to="/service" >Dịch vụ</NavLink>
      </li>
      <li>
        <NavLink to="/contact" >Liên hệ</NavLink>
      </li>
      </ul>

    
    </div>
  );
};

export default Header;