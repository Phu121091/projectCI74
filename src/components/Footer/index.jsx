import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer>
    <div className="inforcontact">
      <h3>Liên hệ Mindx Petshop</h3>
      <p>Tầng 5, 71 Nguyễn Chí Thanh, Hà Nội</p>
      <p>Email:<a href="">nguyentrongphuu@gmail.com</a></p>
      <p>Hotline: 0396163991</p>
    </div>
    <div className="support">
      <h3>Hỗ trợ khách hàng</h3>
      <Link to='/condition'>Điều khoản và điều kiện</Link>
      <Link to='/confidentialy'>Chính sách bảo mật</Link>
      <Link to='/restore'>Chính sách đổi trả</Link>
      <Link to='/warranty'>Chính sách bảo hành</Link>
    </div>
    <div className="cash">
      <h3>Kết nối, thanh toán</h3>
      <img id="img1" src="https://dogily.vn/wp-content/uploads/2019/12/logo_bank-atm.png"></img>
      <a  href="https://www.facebook.com/nguyen.t.phu.71/"  ><img id="img2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"></img></a>
      <img id="img3" src="https://th.bing.com/th/id/R.3f7189662f19f8318fc75252deee723a?rik=Qa956Np1tp8Zcg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fTwitter-Logo.png&ehk=6ekNd2ZmhpvFDGRZF19QcumP9fb8pZRkwrbFbK%2bpULA%3d&risl=&pid=ImgRaw&r=0"></img>
    </div>
  </footer>
};

export default Footer;
