import React from "react";
import ReactPlayer from 'react-player';
import './home.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Slideshow from "./Slideshow";

const Home = () => {
  const doglist1=JSON.parse(localStorage.getItem("doglist"))



  return <div className="main">
    <div className="mainhead">
    <div className="homemenu">
      <h5>Danh mục sản phẩm</h5>
      <ul>
        <li>Chó cảnh</li>
        <li>Mèo cảnh</li>
        <li>Thức ăn</li>
        <li>Phụ kiện</li>
        <li>Dịch vụ chăm sóc</li>
      </ul>
    </div>
    <div className="video">
  <ReactPlayer
    url='https://dogily.vn/wp-content/uploads/2021/10/dogilybanner002.mp4'
    width="640px"
    height="360px"
    playing={true}
    controls={true}
   />
    <div className="infor">Mindx Petshop<br/>
    0123456789
    </div>
  </div>
  <div className="quangcao">
    <img src="https://bizweb.dktcdn.net/100/229/172/articles/66629179-2400121930245605-7225420552893104128-n.jpg?v=1563457949370"></img>
  </div>
  </div>

  <div className="mainmid1">
    <h4>Boss siuuu kute</h4>
    <div className="dogcatslide">
    {doglist1.slice(0,5).map(a=>(
      <div className='Dogitem'>
      <div className='imgctn'>
        <img src={a.image}></img>
      </div>
      <h6>{a.name}</h6>
    </div>
    ))}
    </div>
  </div>

  <div className="mainmid2">
    <h4>Phụ kiện cho boss</h4>
    <Slideshow />
  </div>

  <div className="mainmid3">
    <h4>Spa boss</h4>
  </div>

  </div>
};

export default Home;
