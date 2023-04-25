import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Ads = () => {
  return (
    
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg overflow-hidden"
        
        
      >
        <SwiperSlide><img src="https://static.inaturalist.org/photos/166398949/large.jpeg" alt="ad" className="w-full object-contain"/></SwiperSlide>
        <SwiperSlide><img src="https://static.inaturalist.org/photos/166398949/large.jpeg" alt="ad" className="w-full object-contain"/></SwiperSlide>
        <SwiperSlide><img src="https://static.inaturalist.org/photos/166398949/large.jpeg" alt="ad" className="w-full object-contain"/></SwiperSlide>
        <SwiperSlide><img src="https://static.inaturalist.org/photos/166398949/large.jpeg" alt="ad" className="w-full object-contain"/></SwiperSlide>

      </Swiper>
    
  )
}

export default Ads;