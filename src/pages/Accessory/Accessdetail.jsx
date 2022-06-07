import { useParams } from 'react-router-dom';
import {IoIosPaw} from "react-icons/io";
import {FcApproval} from "react-icons/fc";
import { Changemoney } from '../Dog';
import { useState,useEffect } from 'react';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import React from 'react'

const Accessdetail = () => {
    const itemlist2 = JSON.parse(localStorage.getItem("itemlist"))
    const paramsss = useParams();
    const itemrender = itemlist2.find((a)=>(a.id==(paramsss.id)));
    
    useEffect(()=>{
        const cartsLocal = localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [];

    setCarts(cartsLocal);
    },[]);
    const [carts, setCarts] = useState([]);
    
    const handleAddToCart = (item) => {
        toast.success("Đã thêm vào giỏ hàng");
        
        const existingCart = carts.find((d) => d.id === item.id);
        let addCarts;
    
        if (existingCart) {
          
          addCarts = carts.map((c) =>
            c.id === item.id ? { ...c, count: c.count + 1 } : c
          );
        } else {
          
          addCarts = [...carts, { ...item, count: 1 }];
        }
    
        localStorage.setItem("carts", JSON.stringify(addCarts));
        setCarts(addCarts);
        window.location.reload();
      };


	return (
		<div>
            <h4><Link to='/'>Trang chủ /</Link><Link to='/accessory'>Cửa hàng /</Link><span>{itemrender.kind}</span></h4>
            <div className="dogitem">
             <img src={itemrender.image}></img>
             {itemrender.sell!==0&&<span className='selloff'>-{itemrender.sell}%</span>}
            <div className='dogiteminfor'>
             <h2><b>{itemrender.name}</b></h2>
             <h3>THÔNG TIN</h3>
             <ul>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>Mô tả : {itemrender.category} </li>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>
             {itemrender.sell!==0?
           <span>
           <span className='oldprice'>{Changemoney(itemrender.price)}</span>
           <span> {Changemoney(itemrender.price*(1-(itemrender.sell)/100))}</span>
           </span>
           :
           <span>{Changemoney(itemrender.price)} vnđ</span>}</li>
             </ul>
             <button onClick={()=>handleAddToCart(itemrender)}>Thêm vào giỏ hàng</button>

            </div>  
            </div>
            
        </div>
    )
}

export default Accessdetail