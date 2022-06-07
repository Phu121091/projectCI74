import { useParams } from 'react-router-dom'
import './Dogdetail.css';
import {IoIosPaw} from "react-icons/io";
import {FaHandPointRight} from "react-icons/fa";
import {FcApproval} from "react-icons/fc";
import { Changemoney } from '.';
import { Link } from 'react-router-dom';
 
import React from 'react'

const Dogdetail = () => {
    const doglist2 = JSON.parse(localStorage.getItem("doglist"))
    const params = useParams();
    const dogitemrender = doglist2.find((a)=>(a.id==(params.id)));
    console.log(dogitemrender);
	return (
		<div>
            <h4><Link to='/'>Trang chủ /</Link><Link to='/dog'>Chó cảnh /</Link><span>{dogitemrender.infor.species}</span></h4>
            <div className="dogitem">
             <img src={dogitemrender.image}></img>
            <div className='dogiteminfor'>
             <h2><b>{dogitemrender.name}</b></h2>
             <h3>THÔNG TIN</h3>
             <ul>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>Giống : {dogitemrender.infor.species}</li>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>Màu sắc : {dogitemrender.infor.color}</li>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>Giới tính : {dogitemrender.infor.gender}</li>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>Tuổi : 0{dogitemrender.infor.age} tháng</li>
             <li><IoIosPaw color='rgb(190, 33, 106)'/>Giá : {Changemoney(dogitemrender.infor.cost)} vnd</li>
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

export default Dogdetail