// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowLeftCircle } from "react-icons/bs";
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Remove the following line as 'swiper/css/autoplay' does not exist
import 'swiper/css/autoplay';


function Sports() {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="ws-container">
      <div className="flex justify-between items-start gap-5">
        <div className={`ws-sidebar z-[100] mt-5 bg-emerald-500 ${isOpen ? "w-50" : "w-12"} p-5 pt-8 h-screen rounded-lg shadow-md relative`}>
          <BsArrowLeftCircle className="bg-white text-emerald-700 rounded-full text-3xl absolute -right-3 top-9 border border-emerald-300 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          <h1>One</h1>
        </div>
        <div className="ws-middle w-8/12 h-24 bg-[#484849] mt-5 rounded-sm text-white">
          <SportsCarousel />
        </div>
        <div className="ws-left-sidebar bg-emerald-600 w-50 h-24 mt-5 mr-5 ">
          <h1>Three</h1>
        </div>
      </div>
    </div>
  )
}

function SportsCarousel() {

  return (

    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={100}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={2}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}>

      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

    </Swiper>
  )
};

export default Sports
