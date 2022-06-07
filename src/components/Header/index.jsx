import React, { useEffect, useState } from "react";
import { NavLink,Link, useNavigate, useLocation } from "react-router-dom";
import "./styles.css";
import {FaPaw} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import {BiSupport} from "react-icons/bi";
import { toast } from "react-toastify";

const Header = () => {
  const handleActive = ({ isActive }) => {
    return isActive && "active";
  };

  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [carts, setCarts] = useState([]);
  const [find,setFind] = useState("");

  useEffect(() => {
    let current = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;
    if (current) {
      setCurrentUser(current);
    } else {
      setCurrentUser(null);
    }

    const cartsLocal = localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [];

     setCarts(cartsLocal);
  }, [location]);
  
  const handleFind= (e) => {
    setFind(e.target.value);
    
  }
  const handleClick=()=>{
    if(find==""){
      toast.error("Nhập từ khóa cần tìm");
    }else{
    localStorage.setItem("find", JSON.stringify(find));
    navigate("/find", { replace: true });
    window.location.reload();
  }}

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("carts");
    navigate("/log-in", { replace: true });
  };

  return (
    <div>
    <header>
      <NavLink to="/" className="logo">
        <img className="imglogo" src="https://www.cdafc.org/wp-content/uploads/2018/10/CDAFC-Dog-Cat-Logo-e1540407791560.png"/>
        <p>Mindx Petshop</p>
      </NavLink>

      <div className="search">
      <input type="text" placeholder="Bạn muốn tìm gì?" className="inputsearch" onChange={handleFind} value={find}></input>
      <FaPaw className="iconsearch" onClick={handleClick}/>
      </div>
       
      <Link to='/condition' className="support">
      <BiSupport className="spicon"/>
      <span className="greet">Hỗ trợ</span>
      </Link>

      <Link to="/carts" className="cart" >
        <FaShoppingCart className="carticon"/>
        <span className="greet">Giỏ hàng</span>
        <span className="totalcart">{carts.length}</span>
      </Link>
      <div className="options">
        <ul>
          <li>
            
            {currentUser ? (
              <div>
              <NavLink to="/user" className={handleActive}>Xin chào 
              <div className="user-info">
                <span className="greet">{currentUser.userName}</span>
                
              </div>
              </NavLink>
              <button className="logout" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </div>
            ) : (
              <>
                <NavLink to="/log-in" className={handleActive}>
                  Đăng nhập
                </NavLink>
                <NavLink to="/sign-up" className={handleActive}>
                  Đăng kí
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