import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";


const Ads = () => {
  return (
  <div> 
    <div style={{marginBottom:"40px"}}>
  <h1 style={{ fontWeight:"900", padding:"15px",textAlign: "center"}}>පිඹුරා සහ පොළඟා වෙන්කර හදුනා ගන්නා ආකාරය </h1>
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}

    navigation={true}
    modules={[Autoplay, Navigation]}
    className="rounded-lg overflow-hidden"
    
    
  >
    <SwiperSlide><img src="https://i.ibb.co/f0L07B1/python-1.jpg" alt="ad" className="w-full object-contain"/></SwiperSlide>
    <SwiperSlide><img src="https://i.ibb.co/8NKSmgh/python-2.jpg" alt="ad" className="w-full object-contain"/></SwiperSlide>
    <SwiperSlide><img src="https://i.ibb.co/cbW4Yxq/Untitled-1.jpg" alt="ad" className="w-full object-contain"/></SwiperSlide>
    <SwiperSlide><img src="https://i.ibb.co/ftts5PW/python-3.jpg" alt="ad" className="w-full object-contain"/></SwiperSlide>

  </Swiper>
  </div>
  <div>
  <h1 style={{ fontWeight:"900", padding:"15px" ,alignItems:"center", textAlign: "center"}}> රදනකයා සහ කරවලා වෙන් කර හඳුනා ගන්නා ආකාරය  </h1>
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
 
    navigation={true}
    modules={[Autoplay, Navigation]}
    className="rounded-lg overflow-hidden"
    
    
  >
    <SwiperSlide><img src="https://i.ibb.co/p1Yq5Yg/krait-1-Copy.jpg" alt="ad" className="w-full object-contain"/></SwiperSlide>
    <SwiperSlide><img src="https://i.ibb.co/C7q6WXs/krait-1.jpg" alt="ad" className="w-full object-contain"/></SwiperSlide>
    <SwiperSlide><img src="https://i.ibb.co/CzhnMv1/krait-2.jpg" alt="ad" className="w-full object-contain"/></SwiperSlide>
    <SwiperSlide><img src="https://i.ibb.co/SVMLxtd/krait3.jpg" alt="ad" className="w-full object-contain"/></SwiperSlide>

  </Swiper>
  </div>
  </div>
  )
}

export default Ads;