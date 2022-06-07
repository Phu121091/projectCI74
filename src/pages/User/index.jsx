import React, { useEffect, useState } from "react";
import './user.css';
import { handleCaculateFee } from "../Accessory/Carts";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let current = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;

    setCurrentUser(current);
  }, []);
  

  // if (!currentUser) return <></>;
  return (
    <div>
      {currentUser?<div>
      <h1>Tài khoản : {currentUser.userName} </h1>
      
      {currentUser.buy.length>0 && <div className="c3">
      <h3>Đơn hàng đã mua ({currentUser.buy.length}) đơn :</h3>
        {currentUser.buy.map((d,index)=>(
          <div className="c2" key={index}>
            {d.map((e,index)=>(
              <div className="c1" key={index}>
                <p>{e.name}</p>
                <p>Giá :{e.price}</p>
                <p>Số lượng :{e.count}</p>
              </div>
            ))}
            <h6>Tổng cộng : {handleCaculateFee(d)} vnd</h6>
          </div>
        )
        )}
        </div>}
        </div>:<div></div>}
    </div>
  );
};

export default User;