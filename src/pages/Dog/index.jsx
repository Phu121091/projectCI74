import React,{ useState,useEffect } from 'react';
import './Dog.css';
import { NavLink,Link } from "react-router-dom";



const Dog = () => {

const [Dogrender,setDogrender]=useState([]);

const Doglist= JSON.parse(localStorage.getItem("doglist"));
const Golden = Doglist.filter((d)=>d.infor.species=="Golden Retriever (Gâu đần)");
const Phocsoc = Doglist.filter((d)=>d.infor.species=="Pomeranian (Phốc sóc, Pom)");
const Phochuou = Doglist.filter((d)=>d.infor.species=="Phốc hươu (fox hươu, phốc, fox)");
const Poodle = Doglist.filter((d)=>d.infor.species.includes("Poodle"));
const Corgi = Doglist.filter((d)=>d.infor.species=="Corgi Pembroke");
const Alaska = Doglist.filter((d)=>d.infor.species=="Alaska Malamute");

const [Now,setNow]=useState("");
const [Nowrender,setNowrender]=useState(Doglist);
useEffect(()=>{
  setDogrender(Doglist);
},[]);

const [sl,setSl]=useState("All");

const select=(e)=>{
  setSl(e.target.value);
}

useEffect(()=>{
  switch(sl){
    case "Tất cả":
      setDogrender(Nowrender);
      break;
    case "Dưới 5 triệu":
      setDogrender(Nowrender.filter((d)=>d.infor.cost<5000000));
      break;
    case "5-10 triệu":
      setDogrender(Nowrender.filter((d)=>(d.infor.cost>=5000000)&&(d.infor.cost<=10000000)));
      break;
    case "Trên 10 triệu":
      setDogrender(Nowrender.filter((d)=>d.infor.cost>10000000));
      break;
  }
},[sl]);
const sAll=()=>{
  setNowrender(Doglist);
 setDogrender(Doglist);
 setNow("");
 setSl("Tất cả");
}
const sGolden=()=>{
 setNowrender(Golden);
 setDogrender(Golden);
 setNow("Golden");
 setSl("Tất cả");
}
const sPhocsoc=()=>{
  setNowrender(Phocsoc);
  setDogrender(Phocsoc);
  setNow("Phốc sóc");
  setSl("Tất cả");
 }
 const sPhochuou=()=>{
  setNowrender(Phochuou);
  setDogrender(Phochuou);
  setNow("Phốc hươu");
  setSl("Tất cả");
 }
 const sPoodle=()=>{
  setNowrender(Poodle);
  setDogrender(Poodle);
  setNow("Poodle");
  setSl("Tất cả");
 }
 const sCorgi=()=>{
  setNowrender(Corgi);
  setDogrender(Corgi);
  setNow("Corgi");
  setSl("Tất cả");
 }
 const sAlaska=()=>{
  setNowrender(Alaska);
  setDogrender(Alaska);
  setNow("Alaska");
  setSl("Tất cả");
 }


  return (
    <div >
      <div className='headerdog'>
      <h4 ><span onClick={sAll}>Chó cảnh</span> / <span>{Now}</span></h4>
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
        <li onClick={sGolden}>Golden</li>
        <li onClick={sPhocsoc}>Phốc sóc</li>
        <li onClick={sPhochuou}>Phốc hươu</li>
        <li onClick={sPoodle}>Poodle</li>
        <li onClick={sCorgi}>Corgi</li>
        <li onClick={sAlaska}>Alaska</li>
        </ul>
      </div>
      <div className='doglist'>
      {Dogrender.length!==0? Dogrender.map((a,index)=>(
        <Link to={`/dogitem/${a.id}`} className='Dogitem' key={index}>
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

export default Dog

export const Changemoney=(a)=>{
 return Number(a).toLocaleString("en");
}
