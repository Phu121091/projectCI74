import React from "react";
import { MdDelete } from "react-icons/md";
import './style.css';
import { Changemoney } from "../Dog";

const CartItem = ({ cart, handleChange, handleDelete }) => {
  const { name, image, price ,sell } = cart;
  return (
    <div className="cartitem">
      <div className="left-cart">
        <img src={image} alt="" />
        {sell!==0&&<span className='selloff'>-{sell}%</span>}
      </div>
      <div className="right-cart">
      <div className="rightinfor">
          <h4 className="name">{name}</h4>
          {sell!==0?
    <span>
      <span className='oldprice'>{Changemoney(price)}</span>
      <span> {Changemoney(price*(1-(sell)/100))}</span>
      </span>
    :
    <span>{Changemoney(price)} vnđ</span>}
          {/* <p>Đơn giá : {Changemoney(price) } vnd</p> */}
        </div>
        <div className="count">
          <button
            className="decrease"
            onClick={() => handleChange(cart.id, "decrease")}
          >
            -
          </button>
          <span>{cart.count}</span>
          <button
            className="plus"
            onClick={() => handleChange(cart.id, "increase")}
          >
            +
          </button>
          <span className="delete" onClick={() => handleDelete(cart.id)}>
          <MdDelete color="red" fontSize="25px" />
        </span>
        </div>
        
      </div>
    </div>
  );
};

export default CartItem;