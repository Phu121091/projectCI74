import React,{ useState,useEffect } from 'react';
import { NavLink,Link } from "react-router-dom";
import Cart from './Cart';

const Accessory = () => {
  const [Itemrender,setItemrender]=useState([]);
  const Itemlist= JSON.parse(localStorage.getItem("itemlist"));

  const [Now,setNow]=useState("");

  const Food = Itemlist.filter((d)=>d.kind=="food");
  const Cosmetic = Itemlist.filter((d)=>d.kind=="cosmetic");
  const Access = Itemlist.filter((d)=>d.kind=="access");
useEffect(()=>{
  setItemrender(Itemlist);
},[]);

const sAll=()=>{
 setItemrender(Itemlist);
 setNow("");
}
const sFood=()=>{
 setItemrender(Food);
 setNow("Thực phẩm");
}
const sCosmetic=()=>{
  setItemrender(Cosmetic);
  setNow("Mỹ phẩm");
 }
 const sAccess=()=>{
  setItemrender(Access);
  setNow("Phụ kiện - Đồ chơi");
 }

  return (
    <div>
      <div className='headerdog'>
      <h4 ><span onClick={sAll}>Cửa hàng</span> / <span>{Now}</span></h4>
      </div>

      <div className='Dogcontainer'>
      <div className='menudog'>
        <ul>
        <li onClick={sFood}>Thực phẩm</li>
        <li onClick={sCosmetic}>Mỹ phẩm</li>
        <li onClick={sAccess}>Phụ kiện - Đồ chơi</li>
        </ul>
      </div>
      <div className='doglist'>
      {Itemrender.length!==0? Itemrender.map((a,index)=>(
        <Cart d={a} key={index}/>
        )):<h6>Không có kết quả phù hợp</h6>}
     </div>
      </div>

    </div>
      )
}
export default Accessory