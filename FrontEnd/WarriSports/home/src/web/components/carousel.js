import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../components/assets/images/Banner--1-1.jpg";
import banner2 from "../components/assets/images/Banner--1-2.jpg";
import banner3 from "../components/assets/images/Banner--1-3.jpg";
import banner4 from "../components/assets/images/Banner--1-4.jpg";


const SportsCarousel = () => {
  
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={2}
      onSlideChange={() => {}}
    >
      <SwiperSlide>
        <img src={banner1} alt="Banner 1" className="rounded-sm" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="Banner 2" className="rounded-sm" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="Banner 3" className="rounded-sm" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner4} alt="Banner 4" className="rounded-sm" />
      </SwiperSlide>
    </Swiper>
  );
}


export default SportsCarousel;