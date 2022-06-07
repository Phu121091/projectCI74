import { useParams } from 'react-router-dom'
import './Catdetail.css';
import {IoIosPaw} from "react-icons/io";
import {FaHandPointRight} from "react-icons/fa";
import {FcApproval} from "react-icons/fc";
import { Changemoney } from '../Dog';
import { Link } from 'react-router-dom';
 
import React from 'react'

const Catdetail = () => {
    const catlist2 = JSON.parse(localStorage.getItem("catlist"));
    const paramss = useParams();
    const catitemrender = catlist2.find((a)=>(a.id==(paramss.id)));
	return (
		<div>
            <h4><Link to='/'>Trang chủ /</Link><Link to='/cat'>Mèo cảnh /</Link><span>{catitemrender.infor.species}</span></h4>
            <div className="dogitem">
             <img src={catitemrender.image}></img>
            <div className='dogiteminfor'>
             <h2><b>{catitemrender.name}</b></h2>
             <h3>THÔNG TIN</h3>
             <ul>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>Giống : {catitemrender.infor.species}</li>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>Màu sắc : {catitemrender.infor.color}</li>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>Giới tính : {catitemrender.infor.gender}</li>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>Tuổi : 0{catitemrender.infor.age} tháng</li>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>Giá : {Changemoney(catitemrender.infor.cost)} vnd</li>
             </ul>
             <p><FcApproval/>Quý khách đến xem và mua thú cưng trực tiếp tại của hàng Mindx Petshop 22 C Thành Công Hanoi</p>

            </div>  
            </div>
            <div className='note'>
                <h3>QUYỀN LỢI KHÁCH HÀNG</h3>
                <ul>
                    <li><FaHandPointRight color='rgb(190, 33, 106)'/>Tặng bộ đồ dùng giá trị 1.000.000 đồng.</li>
                    <li><FaHandPointRight color='rgb(190, 33, 106)'/>Bảo hành sức khỏe dài hạn. Gói bảo hành lên đến 365 ngày (liên hệ để biết thêm chi tiết).</li>
                    <li><FaHandPointRight color='rgb(190, 33, 106)'/>Giảm 5% giá phụ kiện trọn đời tại Mindx Petshop.</li>
                    <li><FaHandPointRight color='rgb(190, 33, 106)'/>Giảm 20% phí dịch vụ Spa Grooming & Pet Hotel.</li>
                    <li><FaHandPointRight color='rgb(190, 33, 106)'/>Bác sĩ thú y của Phòng khám Mindx thăm khám tận nhà.</li>
                    <li><FaHandPointRight color='rgb(190, 33, 106)'/>Giảm 5% khi mua bé tiếp theo.</li>
                </ul>
            </div>
        </div>
    )
}

export default Catdetail