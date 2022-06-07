import React from "react";
import ReactPlayer from 'react-player';
import './home.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Link } from "react-router-dom";
import Cart from "../Accessory/Cart";

import Slideshow from "./Slideshow";

const Home = () => {
  
  const doglist1=[
    {
      id:1,
      name:"Chó Golden Retriever bạch kim",
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
      name:"Chó Golden Retriever vàng",
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
      name:"Chó Phốc Sóc Pomeranian Vàng",
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
     name:"Chó Phốc Sóc Pomeranian Vàng",
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
     name:"Chó Poodle Tiny tai bướm màu trắng",
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
     name:"Chó Poodle Tiny màu đen",
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
     name:"Chó Poodle Tiny bò sữa đen trắng",
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
     name:"Chó Phốc hươu màu vàng bò",
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
     name:"Chó Corgi Pembroke Vàng Trắng",
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
     name:"Chó Alaska nâu đỏ",
     image:"https://dogily.vn/wp-content/uploads/2022/05/cho-alaska-nau-do-duc-4-600x400.png",
     infor:{
      species:"Alaska Malamute",
      color:"nâu đỏ",
      gender:"đực",
      age:3,
      cost:2000000,
    }
    },
  ]

  const catlist1=[
    {
      id:1,
      name:"Mèo Munchkin Bicolor",
      image:"https://dogily.vn/wp-content/uploads/2022/06/meo-aln-munchkin-chan-ngan-mau-bicolor-3-e1654314570272.png",
      infor:{
       species:"Munchkin (chân ngắn)",
       color:"bicolor",
       gender:"cái",
       age:5,
       cost:5000000,
     }
   },
    {
      id:2,
      name:"Mèo Anh lông dài Munchkin trắng",
      image:"https://dogily.vn/wp-content/uploads/2022/06/meo-aln-munchkin-chan-ngan-mau-trang-8-600x400.png",
      infor:{
       species:"Anh lông dài (British Longhair), Ald",
       color:"trắng",
       gender:"đực",
       age:6,
       cost:4500000,
     }
   },
   {
    id:3,
    name:"Mèo Anh lông dài tai cụp Bicolor",
    image:"https://dogily.vn/wp-content/uploads/2022/06/ald-mau-bicolor-2-thang-13-600x400.png",
    infor:{
     species:"Anh lông dài (British Longhair), Ald, Scottish Fold (tai cụp)",
     color:"bicolor",
     gender:"đực",
     age:2,
     cost:6000000,
   }
 },
 {
  id:4,
  name:"Mèo Bengal màu nâu",
  image:"https://dogily.vn/wp-content/uploads/2022/06/meo-bao-bengal-8-thang-2-600x400.png",
  infor:{
   species:"Bengal",
   color:"nâu",
   gender:"đực",
   age:8,
   cost:2000000,
 }
},
{
  id:5,
  name:"Mèo Maine Coon màu silver ",
  image:"https://dogily.vn/wp-content/uploads/2022/06/maine-coon-silver-duc-9-600x400.png",
  infor:{
   species:"Maine Coon (mèo Mỹ lông dài)",
   color:"silver",
   gender:"đực",
   age:2,
   cost:4000000,
 }
},
{
  id:6,
  name:"Mèo Anh lông dài tai cụp Xám xanh",
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
  id:7,
  name:"Mèo Anh lông ngắn màu Vàng",
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
  id:8,
  name:"Mèo Scottish Silver tai cụp",
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
  id:9,
  name:"Mèo Scottish Lông Dài Trắng",
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

  const itemlist1 = [
    {
      id: 1,
      sell:20,
      kind:"access",
      name: "Xe đẩy vận chuyển thú cưng",
      category:
        "Chất liệu; Thép chịu lực, cường độ cao Trọng lượng: 7kg4 Đóng gói: 8kg7 Kích thước: 77*49*20 Chịu lực: 25kg",
      price: 2946000,
      image:
        "https://product.hstatic.net/1000238938/product/46e9355f286049959d490b3c29e3abb1_4b3d4e26ddc24be2a7b09fa8bc57980e_medium.jpg",
    },
    {
      id: 2,
      sell:0,
      kind:"food",
      name: "Soup cho mèo vị cá ngừ",
      category:
        "Thịt ức gà 26%, tinh bột, vị cá ngừ – sò điệp – cá chép, chiết xuất men bia… cùng các hương liệu phụ gia an toàn khác.",
      price: 15000,
      image:
        "https://product.hstatic.net/1000238938/product/sup_ciao_goi_40g-01_1f48f4bde0e94f6ebfb39226b35a834e_medium.jpg",
    },
    {
      id: 3,
      sell:20,
      kind:"access",
      name: "Banh bảy màu",
      category: "Chất liệu cao su",
      price: 37000,
      image:
        "https://product.hstatic.net/1000238938/product/banh_7_mau_l-_p526_526-2_526_chinh_787cc4cb91024765a47a05eb7c160eae_medium.jpg",
    },
    {
      id: 4,
      sell:0,
      kind:"access",
      name: "Bát ăn cho chó mèo",
      category:
        "Bát ăn chó mèo hình tròn PD-190 | IRIS  được làm từ chất liệu nhựa cứng cao cấp với bề mặt bóng trơn láng. Sản phẩm không có chất gây độc hại, không làm ảnh hưởng đến chất lượng trong quá trình sử dụng, bền màu và có màu sắc đa dạng bắt mắt.",
      price: 45000,
      image:
        "https://product.hstatic.net/1000238938/product/upload_dafdff37c1e14950bed799ba007e1d05_medium.jpg",
    },
    {
      id: 5,
      sell:30,
      kind:"access",
      name: "Chuồng cho chó",
      category:
        "Chuồng sắt cho chó mèo JCB sơn tĩnh điện là sản phẩm chuồng di động, dễ dàng gấp gọn phù hợp với tất cả giống chó và mèo.",
      price: 1525000,
      image:
        "https://product.hstatic.net/1000238938/product/chuong-cho-cho-jcb__4__6942490104664435810b112902a79c6c_medium.jpg",
    },
    {
      id: 6,
      sell:0,
      kind:"access",
      name: "Áo hoa lá xanh lục",
      category:
        "Chất liệu vải thoáng mát, mang lại cảm giác thoải mái cho các bé",
      price: 250000,
      image:
        "https://product.hstatic.net/1000238938/product/upload_fecd1dc108644d159ce69d6a8c058a1f_medium.jpg",
    },
    {
      id: 7,
      sell:0,
      kind:"food",
      name: "Pate cho chó con mini puppy",
      category:
        "Thức ăn ở dạng khô với các hạt nhỏ, có kích thước phù hợp cho xương hàm trong quá trình nhai và tiêu hóa.",
      price: 33000,
      image:
        "https://product.hstatic.net/1000238938/product/a54a0fcacd40444192f7a062bc136f14_02667fb8d8e84c0f8b18792a11e008e2_medium.jpg",
    },
    {
      id: 8,
      sell:0,
      kind:"access",
      name: "Bộ Bàn Cào Móng Mèo",
      category:"Hãy đầu tư Bộ Bàn Cào Móng Mèo P964 | PIAN PIAN để hướng cho chú mèo của bạn cào móng đúng chỗ. Chọn một dụng cụ cào móng với bề mặt thô nhám để mèo của bạn có thể cào và làm sắc đẹp bộ móng bằng tất cả những sự thích thú của nó.",
      price: 160000,
      image:
        "https://product.hstatic.net/1000238938/product/52151d57386c4f9dada599f2d01ddb14_dd848f30a00142bca4473307d86632cd_medium.jpg",
    },
    {
      id: 9,
      sell:15,
      kind:"access",
      name: "Balo chó mèo phi hành gia",
      category:
        "Chất liệu vải thoáng mát, mang lại cảm giác thoải mái cho các bé",
      price: 667000,
      image:
        "https://product.hstatic.net/1000238938/product/0dcb24f2024f4c9590850ffc43d4be77_569f3481159b486b9679f6ae012a135d_medium.jpg",
    },
    {
      id: 10,
      sell:0,
      kind:"access",
      name: "Bộ tông đơ chuyên nghiệp cắt tỉa lông chó mèo",
      category:
        "Tông đơ chuyên nghiệp Rewell RFCD-F27P là loại sản phẩm không dây dùng pin sạc, được ra mắt năm 2021 với những cải tiến vô cùng vượt trội, cùng thiết kế cao cấp sang trọng, công suất siêu khỏe và thời gian sử dụng lên đến 5 giờ.",
      price: 950000,
      image:
        "https://product.hstatic.net/1000238938/product/641744cc184748c4bccb0492cef648cd_66a9049e59ff4a4799130a0fdd038f57_medium.jpg",
    },
    {
      id: 11,
      sell:20,
      kind:"cosmetic",
      name: "Kem đánh răng Forcans dành cho thú cưng",
      category:
        "Kem đánh răng Forcans dành cho thú cưng là sản phẩm chăm sóc răng miệng cho thú cưng. Giúp loại bỏ vi khuẩn gây hôi miệng. Ngăn ngừa mảng bám, viêm nướu. Sản phẩm với hương vị thơm ngon được thú cưng yêu thích. Sản phẩm y khoa chuyên dùng cho động vật.",
      price: 140000,
      image:
        "https://dogily.vn/wp-content/uploads/2022/02/kem-danh-rang-forcans-1-600x600.jpg",
    },
    {
      id: 12,
      sell:0,
      kind:"food",
      name: "Hạt Royal Canin Persian Kitten 2kg",
      category:
        "Hạt Royal Canin Persian Kitten được sản xuất trên dây chuyền công nghệ hiện đại. Mèo Ba Tư con cần loại hạt được thiết kế đặc biệt theo kích cỡ và kết cấu của chúng để dễ dàng đưa thức ăn vào miệng. Các hạt ROYAL CANIN Persian Kitten với hình thù độc đáo khuyến khích mèo nhai kỹ hơn nhờ đó giúp hỗ trợ vệ sinh răng miệng.",
      price: 464000,
      image:
        "https://dogily.vn/wp-content/uploads/2022/01/hat-royal-canin-persian-kitten-2-kg-3-600x600.jpg",
    },
    {
      id: 13,
      sell:0,
      kind:"food",
      name: "Vitamin Cho Mèo NO.18 - Tim mạch, tránh bệnh thoái hoá võng mạc ở mèo",
      category:
        "Nourse 18 là sản phẩm chăm sóc thú cưng top 1 tại Trung Quốc. Mèo thường sạch sẽ thích liếm láp vệ sinh bản thân, dẫn đến việc nuốt phải các sợi lông tích tụ. Sản phẩm Nourse 29 giúp thúc đẩy quá trình loại bỏ tự nhiên của bóng tóc trong đường tiêu hóa, chống viêm và làm dịu trên màng nhầy.",
      price: 199000,
      image:
        "https://dogily.vn/wp-content/uploads/2022/01/vitamin-cho-meo-no-18-4-600x600.jpg",
    },
    {
      id: 14,
      sell:0,
      kind:"cosmetic",
      name: "Sữa Tắm BoBoTa Đầy Đủ Công Dụng Cho Chó 500ml",
      category:
        "Sữa tắm BoBoTa là dòng sản phẩm chăm sóc lông chó, mèo độc đáo từ chiết xuất cỏ xạ hương cô đặc giàu dưỡng chất, giúp bộ lông của thú cưng trở nên mềm mượt, đẫm hương thơm.",
      price: 145000,
      image:
        "https://dogily.vn/wp-content/uploads/2021/12/sua-tam-bobota-3-600x600.jpg",
    },
    {
      id: 15,
      sell:0,
      kind:"food",
      name: "Hạt Me-O Tuna 350g Adult vị Cá Ngừ dành cho mèo trưởng thành ( lấy từ bao 7kg)",
      category:
        "Hạt Me-O Tuna 350g Adult vị Cá Ngừ dành cho mèo trưởng thành là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay, được sản xuất trên dây chuyền công nghệ hiện đại, giúp mèo cưng ăn ngon miệng và phát triển toàn diện.",
      price: 39000,
      image:
        "https://dogily.vn/wp-content/uploads/2021/12/hat-me-o-350g-tu-bich-7-kg-4-600x600.jpg",
    },
    {
      id: 16,
      sell:0,
      kind:"cosmetic",
      name: "Kem đánh răng cho mèo Dental Hygiene Set For Cats 50g",
      category:
        "Kem đánh răng cho mèo Dental Hygiene Set For Cats 50g loại bỏ nguyên nhân gây vi khuẩn hôi miệng, ngăn ngừa mảng bám, cao răng, viêm nướu và duy trì sự khỏe mạnh cho răng.",
      price: 74000,
      image:
        "https://dogily.vn/wp-content/uploads/2021/12/kem-danh-rang-cho-meo-9-600x600.jpg",
    },
  ];
  localStorage.setItem("doglist", JSON.stringify(doglist1));
  localStorage.setItem("catlist", JSON.stringify(catlist1));
  localStorage.setItem("itemlist", JSON.stringify(itemlist1));




  return <div className="main">
    <div className="mainhead">
    <div className="homemenu">
      <h5>Danh mục sản phẩm</h5>
      <ul>
        <li><Link to='/dog'>Chó cảnh</Link></li>
        <li><Link to='/cat'>Mèo cảnh</Link></li>
        <li><Link to='/accessory'>Thức ăn</Link></li>
        <li><Link to='/accessory'>Phụ kiện</Link></li>
        <li><Link to='/service'>Dịch vụ chăm sóc</Link></li>
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
    <Slideshow />
  </div>

  <div className="mainmid2">
    <h4>Khuyến mãi hot!</h4>
    <div className="sellmain">
    {itemlist1.filter((e)=>(e.sell>0)).map((d,index)=>(
      <Cart d={d} key={index}/>
    ))}
    </div>
  </div>

  <div className="mainmid3">
    <h4>Spa boss</h4>
  </div>

  </div>
};

export default Home;
