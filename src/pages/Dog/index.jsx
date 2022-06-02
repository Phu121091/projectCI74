import React,{ useState,useEffect } from 'react';
import './Dog.css';

const Dog = () => {

const [Dogrender,setDogrender]=useState([]);
const [Doglist,setDoglist] = useState([
 {
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
  id:6,
  name:"Poodle Tiny màu đen",
  image:"https://dogily.vn/wp-content/uploads/2021/10/cho-poodle-mau-den-2-thang-tuoi-8-600x400.jpg",
  infor:{
   species:"Poodle Tiny",
   color:"đen tuyền",
   gender:"đực",
   age:2,
   cost:7000000,
 }
 },
 {
  id:7,
  name:"Poodle Tiny bò sữa đen trắng",
  image:"https://dogily.vn/wp-content/uploads/2021/12/poodle-bo-sua-1-600x400.jpg",
  infor:{
   species:"Poodle Tiny",
   color:"đen trắng (bò sữa)",
   gender:"đực",
   age:2,
   cost:14000000,
 }
 },
 {
  id:8,
  name:"Phốc hươu màu vàng bò",
  image:"https://dogily.vn/wp-content/uploads/2022/05/cho-phoc-huou-duc-1-600x400.png",
  infor:{
   species:"Phốc hươu (fox hươu, phốc, fox)",
   color:"vàng bò",
   gender:"đực",
   age:4,
   cost:1000000,
 }
 },
 {
  id:9,
  name:"Corgi Pembroke Vàng Trắng",
  image:"https://dogily.vn/wp-content/uploads/2022/05/corgi-vang-trang-4-2-600x400.png",
  infor:{
   species:"Corgi Pembroke",
   color:"vàng trắng",
   gender:"đực",
   age:3,
   cost:5000000,
 }
 },
 {
  id:10,
  name:"Alaska nâu đỏ",
  image:"https://dogily.vn/wp-content/uploads/2022/05/cho-alaska-nau-do-duc-4-600x400.png",
  infor:{
   species:"Alaska Malamute",
   color:"nâu đỏ",
   gender:"đực",
   age:3,
   cost:2000000,
 }
 },
]);
localStorage.setItem("doglist", JSON.stringify(Doglist));
useEffect(()=>{
  setDogrender(Doglist);
},[]);
const slnow = {
  sl1:"0",
  sl2:"0"
}
const [sl,setSl]=useState(slnow);
const { sl1 , sl2 } = sl;
const [change,setChange]=useState(true);



const select1=(e)=>{
  setSl({...sl,sl1:e.target.value});
  setChange(!change);
}
const select2 =(a)=>{
  setSl({...sl,sl2:a.target.value});
  setChange(!change);
  
}

useEffect(()=>{
  switch(sl1){
    case "0":
      setDogrender(Doglist);
      break;
    case "1":
      setDogrender(Doglist.filter((d)=>d.infor.cost<5000000));
      break;
    case "2":
      setDogrender(Doglist.filter((d)=>(d.infor.cost>=5000000)&&(d.infor.cost<=10000000)));
      break;
    case "3":
      setDogrender(Doglist.filter((d)=>d.infor.cost>10000000));
      break;
  }
},[sl1]);
useEffect(()=>{
  setDogrender(Doglist);
  setSl({...sl,sl1:0});
  switch(sl2){
    case "0":
      setDogrender(Doglist);
      break;
    case "1":
      setDogrender(Doglist.filter((d)=>d.infor.gender=="đực"));
      break;
    case "2":
      setDogrender(Doglist.filter((d)=>d.infor.gender=="cái"));
      break;
  }
},[sl2]);
// useEffect(()=>{
//   console.log(sl1);
//   console.log(sl2);
//  if(sl1==0){
//   setDogrender(Doglist);
//   if(sl2==0){
//     return;
//    }else if(sl2==1){
//     setDogrender([...Dogrender.filter((d)=>d.infor.gender=="đực")]);
//    }else if(sl2==2){
//     setDogrender([...Dogrender.filter((d)=>d.infor.gender=="cái")]);
//    };return;
//  }else if(sl1==1){
//   setDogrender(Doglist.filter((d)=>d.infor.cost<5000000));
//   if(sl2==0){
//     return;
//    }else if(sl2==1){
//     setDogrender(Dogrender.filter((d)=>d.infor.gender=="đực"));
//    }else if(sl2==2){
//     setDogrender(Dogrender.filter((d)=>d.infor.gender=="cái"));
//    };return;
//  }else if(sl1==2){
//   setDogrender(Doglist.filter((d)=>(d.infor.cost>=5000000)&&(d.infor.cost<=10000000)));
//   if(sl2==0){
//     return;
//    }else if(sl2==1){
//     setDogrender(Dogrender.filter((d)=>d.infor.gender=="đực"));
//    }else if(sl2==2){
//     setDogrender(Dogrender.filter((d)=>d.infor.gender=="cái"));
//    };return;
//  }else if(sl1==3){
//   setDogrender(Doglist.filter((d)=>d.infor.cost>10000000));
//   if(sl2==0){
//     return;
//    }else if(sl2==1){
//     setDogrender(Dogrender.filter((d)=>d.infor.gender=="đực"));
//    }else if(sl2==2){
//     setDogrender(Dogrender.filter((d)=>d.infor.gender=="cái"));
//    };return;
//  };
  
// useEffect(()=>{
//   switch(sl1){
//     case "0":
//       setDogrender(Doglist);
//       break;
//     case "1":
//       setDogrender(Doglist.filter((d)=>d.infor.cost<5000000));
//       break;
//     case "2":
//       setDogrender(Doglist.filter((d)=>(d.infor.cost>=5000000)&&(d.infor.cost<=10000000)));
//       break;
//     case "3":
//       setDogrender(Doglist.filter((d)=>d.infor.cost>10000000));
//       break;
//   };
//   switch(sl2){
//     case "0":
//       setDogrender(Doglist);
//       break;
//     case "1":
//       setDogrender(Doglist.filter((d)=>d.infor.gender=="đực"));
//       break;
//     case "2":
//       setDogrender(Doglist.filter((d)=>d.infor.gender=="cái"));
//       break;
//   }
// },[change]);

  return (
    <div >
      <div className='headerdog'>
      <h4>Chó cảnh</h4>
      <p>Bộ lọc</p>
      <p>Giá:</p>
      <select id="checkcost" onChange={select1} >
        <option value="0">{sl1}</option>
        <option value="1">Dưới 5 triệu</option>
        <option value="2">5 -10 triệu</option>
        <option value="3">Trên 10 triệu</option>
      </select>
      <p>Giới tính:</p>
      <select id="checkgender" onChange={select2} >
        <option value="0">Tất cả</option>
        <option value="1">Đực</option>
        <option value="2">Cái</option>
      </select>
      </div>
      <div className='Dogcontainer'>
      <div className='menudog'>
        <ul>
        <li>Golden</li>
        <li>Phốc sóc</li>
        <li>Phốc hươu</li>
        <li>Poodle</li>
        <li>Corgi</li>
        <li>Alaska</li>
        </ul>
      </div>
      <div className='doglist'>
      {Dogrender.map((a,index)=>(
        <div className='Dogitem' key={index}>
          <div className='imgctn'>
            <img src={a.image}></img>
          </div>
          <h6>{a.name}</h6>
          <p>{a.infor.cost} vnđ</p>
        </div>
      ))}
      </div>
      </div>
    </div>
      )
}

export default Dog