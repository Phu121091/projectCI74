import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css';
import { Link } from 'react-router-dom';
import { Changemoney } from '../Dog';

const slideImages = [
  { 
    class:"dog",
    id:1,
    name:"Golden Retriever bạch kim",
    image:"https://dogily.vn/wp-content/uploads/2022/05/golden-bach-kim-2.png",
    infor:{
     species:"Golden Retriever (Gâu đần)",
     color:"bạch kim",
     gender:"đực",
     age:1,
     cost:6000000,
   }
 },
  { 
    class:"dog",
    id:2,
    name:"Golden Retriever vàng",
    image:"https://dogily.vn/wp-content/uploads/2022/05/golden-vang-duc-1-600x400.png",
    infor:{
      species:"Golden Retriever (Gâu đần)",
      color:"vàng",
      gender:"đực",
      age:2,
      cost:5000000,
  }
 },
  { 
    class:"dog",
    id:3,
    name:"Phốc Sóc Pomeranian Vàng",
    image:"https://dogily.vn/wp-content/uploads/2022/05/phoc-soc-vang-duc-8-1-600x400.png",
    infor:{
     species:"Pomeranian (Phốc sóc, Pom)",
     color:"vàng",
     gender:"đực",
     age:2,
     cost:14000000,
    }
  },
  {
    class:"dog",
   id:4,
   name:"Phốc Sóc Pomeranian Vàng",
   image:"https://dogily.vn/wp-content/uploads/2022/05/phoc-soc-vang-duc-6-600x400.png",
   infor:{
    species:"Pomeranian (Phốc sóc, Pom)",
    color:"vàng",
    gender:"cái",
    age:3,
    cost:14000000,
  }
 },
  {
    class:"dog",
   id:5,
   name:"Poodle Tiny tai bướm màu trắng",
   image:"https://dogily.vn/wp-content/uploads/2021/10/cho-poodle-tai-buom-trang-2-thang-tuoi-5-600x400.jpg",
   infor:{
    species:"Poodle Tiny tai bướm",
    color:"kem trắng",
    gender:"cái",
    age:4,
    cost:10000000,
  }
  },
  {
    class:"cat",
    id:6,
    name:"Anh lông dài tai cụp Xám xanh",
    image:"https://dogily.vn/wp-content/uploads/2022/05/meo-ald-xam-xanh-cai-2-600x400.png",
    infor:{
     species:"Anh lông dài (British Longhair), Ald, Scottish Fold (tai cụp)",
     color:"xám xanh",
     gender:"cái",
     age:2,
     cost:4500000,
   }
  },
  { 
    class:"cat",
    id:7,
    name:"Anh lông ngắn màu Vàng",
    image:"https://dogily.vn/wp-content/uploads/2022/05/meo-aln-vang-duc-3-1-600x400.png",
    infor:{
     species:"Anh lông ngắn (British Shorthair)",
     color:"vàng",
     gender:"đực",
     age:3,
     cost:3500000,
   }
  }, 
  {
    class:"cat",
    id:8,
    name:"Scottish Silver tai cụp",
    image:"https://dogily.vn/wp-content/uploads/2022/05/aln-tai-cup-mau-silver-mat-xanh-cai-6-600x400.png",
    infor:{
     species:"Scottish (tai cụp) lông ngắn",
     color:"Silver",
     gender:"cái",
     age:2,
     cost:6000000,
   }
  },
  {
    class:"cat",
    id:9,
    name:"Scottish Lông Dài Trắng",
    image:"https://dogily.vn/wp-content/uploads/2022/03/ald-trang-cai-2-600x450.png",
    infor:{
     species:"Anh lông dài (British Longhair), Ald",
     color:"Trắng",
     gender:"cái",
     age:4,
     cost:6000000,
   }
  },
  {
    class:"cat",
    id:10,
    name:"Mèo Ragdoll",
    image:"https://dogily.vn/wp-content/uploads/2022/01/ragdoll-dogily-1-600x450.jpg",
    infor:{
     species:"Ragdoll",
     color:"Silver",
     gender:"đực",
     age:5,
     cost:9000000,
   }
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container" >
        <Slide duration={2000} slidesToShow={4} slidesToScroll={1}>
         {slideImages.map((d, index)=> (
            <div className="each-slide" key={index}>
              <Link to={`/${d.class}item/${d.id}`} >
          <div className='imgslide'>
            <img src={d.image}></img>
          </div>
          <h6>{d.name}</h6>
          <p>{Changemoney(d.infor.cost)} vnđ</p>
        </Link>
            </div>
          ))}
        </Slide>
      </div>
    )
}
export default Slideshow;