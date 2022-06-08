import React,{ useEffect, useState } from "react";
import CartItem from "./Cartitem";
import './style.css';
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




const Carts = () => {
    const [carts, setCarts] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    const cartsLocal = localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [];

    setCarts(cartsLocal);
  }, []);

  useEffect(() => {
    let current = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;
  },[]);

  

  const handleChange = (id, method) => {
    let addCart;
    if (method === "increase") {
      addCart = carts.map((c) =>
        c.id === id ? { ...c, count: c.count + 1 } : c
      );
    } else {
      addCart = carts.map((c) =>
        c.id === id ? { ...c, count: c.count === 1 ? 1 : c.count - 1 } : c
      );
    }

    setCarts(addCart);
    localStorage.setItem("carts", JSON.stringify(addCart));
  };

  const handleDelete = (id) => {
    let addCart;
    addCart = carts.filter((c) => id !== c.id);
    setCarts(addCart);
    localStorage.setItem("carts", JSON.stringify(addCart));
  };
  const handleBuy = () => {
    let current = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;
    if(current){
      current.buy=[...current.buy,carts];
      localStorage.setItem("currentUser", JSON.stringify(current));
      let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
      const newarr=users.map((a)=>(a.userName==current.userName?{...current}:a));
      console.log(newarr);
      localStorage.setItem("users", JSON.stringify(newarr));
      
      toast.success("Chốt đơn");
      localStorage.removeItem("carts");
      setTimeout(() => window.location.reload(), 2000);
      // window.location.reload();
    } else {
      toast.error("Bạn cần đăng nhập trước");
      navigate("../log-in", { replace: true });
    }
  }


  return (
    <div>
        <h1 className="total-carts">Đơn hàng có {carts.length} sản phẩm</h1>
        <div className="maincarts">
        <div className="list-cart">
        {carts.map((cart, index) => (
          <CartItem
            key={index}
            handleDelete={handleDelete}
            cart={cart}
            handleChange={handleChange}
          />
        ))}
        <Link to='/accessory' className="links">Xem tiếp sản phẩm</Link>
      </div>
      {carts.length > 0 && (
      <div className="totals">
        <h4 className="total">Tổng tiền : {handleCaculateFee(carts)} vnd</h4>
      <button className="links" onClick={handleBuy}>Thanh toán</button>
      </div>
      )}
      
     </div>
    </div>
  )
}

export default Carts

export const handleCaculateFee = (carts) => {
  let total = 0;
  for (let i = 0; i <= carts.length - 1; i++) {

    total += carts[i].count * carts[i].price*(1-(carts[i].sell)/100);
  }

  return Number(total).toLocaleString("en");
};