import React from 'react';
import { Changemoney } from '../Dog';
import { NavLink,Link } from "react-router-dom";

const Cart = ({d,key}) => {
  return (
    <Link to={`/accessitem/${d.id}`} className='Dogitem' key={key}>
    <div className='imgctn'>
      <img src={d.image}></img>
      {d.sell!==0&&<span className='selloff'>-{d.sell}%</span>}
    </div>
    <h6>{d.name}</h6>
    {d.sell!==0?
    <span>
      <span className='oldprice'>{Changemoney(d.price)}</span>
      <span> {Changemoney(d.price*(1-(d.sell)/100))}</span>
      </span>
    :
    <span>{Changemoney(d.price)} vnđ</span>}
  </Link>
  )
}

export default Cart