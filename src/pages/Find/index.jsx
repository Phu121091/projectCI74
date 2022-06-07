import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Find = () => {
  const [find,setFind]=useState("");
  
  let fin = localStorage.getItem("find")
  ? JSON.parse(localStorage.getItem("find"))
  : "";
  
   
  const doglist = JSON.parse(localStorage.getItem("doglist"));
  const catlist= JSON.parse(localStorage.getItem("catlist"));
  const itemlist= JSON.parse(localStorage.getItem("itemlist"));
  
  const dogl=doglist.map((d)=>({...d,class:"dogitem"}));
  const catl=catlist.map((d)=>({...d,class:"catitem"}));
  const iteml=itemlist.map((d)=>({...d,class:"accessitem"}));

  const alllist =[...dogl,...catl,...iteml];
  const value = fin.toLowerCase().trim();
  const lfind = alllist.filter((d)=>(d.name.toLowerCase().trim().includes(value)));
  
  
 
  
  
  return (
    <div>
      {lfind.length>0 ? <div>
        <h1>Tìm thấy {lfind.length} kết quả của "{fin}"</h1>
        <div className='findcontainer'>
        {lfind.map((a,index)=>(
          <Link to={`/${a.class}/${a.id}`} className='finditem' key={index}>
          <div className='findinfor'>
            <img src={a.image}></img>
          </div>
          <h6>{a.name}</h6>
        </Link>
        ))}
        </div></div>: <h1>Không tìm thấy kết quả phù hợp</h1>}

    </div>
  )
}

export default Find