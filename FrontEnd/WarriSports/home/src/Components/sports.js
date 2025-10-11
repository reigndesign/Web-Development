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
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 px-4 py-3">
        <div className={`ws-sidebar bg-emerald-500 ${isOpen ? "w-72" : "w-20"} w-72 h-screen rounded-lg shadow-md relative`}>
          <BsArrowLeftCircle className='bg-white text-emerald-700 rounded-full text-3xl absolute -right-3 top-9 border border-emerald-300 cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
          <h1>One</h1>
        </div>
        <div className="ws-middle w-full h-24 bg-[#484849] mt-5 rounded-sm text-white">
          <SportsCarousel />
        </div>
        <div className="ws-left-sidebar bg-emerald-600 w-32 h-24 mt-5">
          <h1>Three</h1>
        </div>
      </div>
    </div>
  )
}

function SportsCarousel() {
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={100}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={2}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}
     

    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

    </Swiper>
};

export default Sports
