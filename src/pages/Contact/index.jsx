
import React, { useState } from "react";
import './contact.css';
import { toast } from "react-toastify";
// import GoogleMapReact from 'google-map-react';
// import SimpleMap from './Component/Map';




const Contact = () => {
  
  const [cont, setcont] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cont.name) {
      toast.error("Xin nhập tên bạn!!");
      return;
    } else if (!cont.phone && !cont.email) {
      toast.error("Phải có ít nhất 1 thông tin liên lạc!!");
      return;
    } else if (!cont.notes) {
      toast.error("Xin nhập lời nhắn!!");
      return;
    }
    
    let conts = localStorage.getItem("contact")
      ? JSON.parse(localStorage.getItem("contact"))
      : [];

    conts = [...conts, cont];

    localStorage.setItem("contact", JSON.stringify(conts));
    toast.success("Chúng tôi sẽ liên hệ với bạn sớm!!");
  };

  return (
    
    <div>
      <h5>LIÊN HỆ</h5>
      <div className='mainct'>
        <form className='formcontact' onSubmit={handleSubmit}>
        <label >Họ tên :</label>
        <input type="text" value={cont.name}
        onChange={(e) => setcont({ ...cont, name: e.target.value })}></input>
        <label >Email :</label>
        <input type="text" value={cont.email}
        onChange={(e) => setcont({ ...cont, email: e.target.value })}></input>
        <label >Điện thoại :</label>
        <input type="text" value={cont.phone}
        onChange={(e) => setcont({ ...cont, phone: e.target.value })}></input>
        <label >Lời nhắn :</label>
        <textarea rows="4" cols="20" value={cont.notes}
        onChange={(e) => setcont({ ...cont, notes: e.target.value })}></textarea>
        <button type="submit">Liên hệ và đặt hàng</button>
        </form>
        <div className='inforct'>
          <p><b>Mindx Petshop</b></p>
          <p>Địa chỉ: Tầng 5, 71 Nguyễn Chí Thanh, Hà Nội</p>
          <p>Email:nguyentrongphuu@gmail.com</p>
          <p>Hotline: 0396163991</p>
        </div>
      </div>

    </div>
  )
}

export default Contact