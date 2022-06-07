import React,{ useState,useEffect } from 'react';
import './Cat.css';
import { NavLink,Link } from "react-router-dom";
import { Changemoney } from '../Dog';



const Cat = () => {

const [Catrender,setCatrender]=useState([]);

const Catlist= JSON.parse(localStorage.getItem("catlist"));
const Munchkin = Catlist.filter((d)=>d.infor.species.includes("Munchkin (chân ngắn)"));
const BritishLonghair = Catlist.filter((d)=>d.infor.species.includes("Anh lông dài (British Longhair)"));
const Bengal = Catlist.filter((d)=>d.infor.species.includes("Bengal"));
const BritishShorthair = Catlist.filter((d)=>d.infor.species.includes("Anh lông ngắn (British Shorthair)"));
const MaineCoon = Catlist.filter((d)=>d.infor.species.includes("Maine Coon (mèo Mỹ lông dài)"));
const Scottish = Catlist.filter((d)=>d.infor.species.includes("Scottish"));
const Ragdoll = Catlist.filter((d)=>d.infor.species.includes("Ragdoll"));

const [Now,setNow]=useState("");
const [Nowrender,setNowrender]=useState(Catlist);
useEffect(()=>{
  setCatrender(Catlist);
},[]);

const [sl,setSl]=useState("All");

const select=(e)=>{
  setSl(e.target.value);
}

useEffect(()=>{
  switch(sl){
    case "Tất cả":
      setCatrender(Nowrender);
      break;
    case "Dưới 5 triệu":
      setCatrender(Nowrender.filter((d)=>d.infor.cost<5000000));
      break;
    case "5-10 triệu":
      setCatrender(Nowrender.filter((d)=>(d.infor.cost>=5000000)&&(d.infor.cost<=10000000)));
      break;
    case "Trên 10 triệu":
      setCatrender(Nowrender.filter((d)=>d.infor.cost>10000000));
      break;
  }
},[sl]);
const sAll=()=>{
  setNowrender(Catlist);
 setCatrender(Catlist);
 setNow("");
 setSl("Tất cả");
}
const sMunchkin=()=>{
 setNowrender(Munchkin);
 setCatrender(Munchkin);
 setNow("Munchkin");
 setSl("Tất cả");
}
const sBritishLonghair=()=>{
  setNowrender(BritishLonghair);
  setCatrender(BritishLonghair);
  setNow("Anh lông dài");
  setSl("Tất cả");
 }
 const sBengal=()=>{
  setNowrender(Bengal);
  setCatrender(Bengal);
  setNow("Bengal");
  setSl("Tất cả");
 }
 const sBritishShorthair=()=>{
  setNowrender(BritishShorthair);
  setCatrender(BritishShorthair);
  setNow("Anh lông ngắn");
  setSl("Tất cả");
 }
 const sMaineCoon=()=>{
  setNowrender(MaineCoon);
  setCatrender(MaineCoon);
  setNow("Maine Coon");
  setSl("Tất cả");
 }
 const sScottish=()=>{
  setNowrender(Scottish);
  setCatrender(Scottish);
  setNow("Scottish");
  setSl("Tất cả");
 }
 const sRagdoll=()=>{
  setNowrender(Ragdoll);
  setCatrender(Ragdoll);
  setNow("Ragdoll");
  setSl("Tất cả");
 }
 


  return (
    <div >
      <div className='headerdog'>
      <h4 ><span onClick={sAll}>Mèo cảnh</span> / <span>{Now}</span></h4>
      <p>Bộ lọc</p>
      <p>Giá:</p>
      <select id="checkcost" onChange={select} value={sl}>
        <option value="Tất cả">All</option>
        <option value="Dưới 5 triệu">Dưới 5 triệu</option>
        <option value="5-10 triệu">5-10 triệu</option>
        <option value="Trên 10 triệu">Trên 10 triệu</option>
      </select>
  
      </div>
      <div className='Dogcontainer'>
      <div className='menudog'>
        <ul>
        <li onClick={sMunchkin}>Munchkin</li>
        <li onClick={sBritishLonghair}>Anh lông dài</li>
        <li onClick={sBritishShorthair}>Anh lông ngắn</li>
        <li onClick={sBengal}>Bengal</li>
        <li onClick={sMaineCoon}>Maine Coon</li>
        <li onClick={sScottish}>Scottish</li>
        <li onClick={sRagdoll}>Ragdoll</li>
        </ul>
      </div>
      <div className='doglist'>
      {Catrender.length!==0? Catrender.map((a,index)=>(
        <Link to={`/catitem/${a.id}`} className='Dogitem' key={index}>
          <div className='imgctn'>
            <img src={a.image}></img>
          </div>
          <h6>{a.name}</h6>
          <p>{Changemoney(a.infor.cost)} vnđ</p>
        </Link>
      )):<h6>Không có kết quả phù hợp</h6>}
      </div>
      </div>

    </div>
      )
}

export default Cat

