// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowLeftCircle } from "react-icons/bs";
import { useState } from 'react';
import banner1 from './assets/images/Banner--1-1.jpg';
import banner2 from './assets/images/Banner--1-2.jpg';
import banner3 from './assets/images/Banner--1-3.jpg';
import banner4 from './assets/images/Banner--1-4.jpg';
import { PiSoccerBallFill,PiBaseballFill, PiBasketballFill, PiTennisBallFill, PiFootballFill, PiVolleyballFill } from "react-icons/pi";
import { FaTableTennis, FaGolfBall } from "react-icons/fa";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// 'swiper/css/autoplay' does not exist, so remove this line


function Sports() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ws-container">
      <div className="flex justify-between items-start gap-5">
        <div className={`ws-sidebar z-[100] mt-5 bg-emerald-500 ${isOpen ? "w-50" : "w-20"} p-5 pt-8 h-screen rounded-lg shadow-md duration-300 relative`}>
          <BsArrowLeftCircle className={`bg-white text-emerald-700 rounded-full text-3xl absolute -right-3 top-9 border border-emerald-300 ${!isOpen && "rotate-180"} cursor-pointer`} onClick={() => setIsOpen(!isOpen)} />
          <SportsSidebar isOpen={isOpen} />
        </div>
        <div className="ws-middle w-8/12 h-auto mt-5 rounded">
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
      spaceBetween={10}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={2}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}} >

      <SwiperSlide >
        <img src={banner1} alt='Banner 1' className='rounded-sm'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt='Banner 2' className='rounded-sm'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt='Banner 3' className='rounded-sm'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner4} alt='Banner 4' className='rounded-sm'/>
      </SwiperSlide>
    </Swiper>
  )
};

function SportsSidebar({ isOpen }) {
  return (
    <>
    <div className='inline-flex items-center'>
      <PiSoccerBallFill className='text-white text-3xl rounded cursor-pointer block float-left mr-3' />
      <h1 className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${!isOpen && "scale-0"}`}>Soccer</h1>
    </div>
    <div className='inline-flex items-center'>
      <PiBasketballFill className='text-white text-3xl rounded cursor-pointer block float-left mr-3' />
      <h1 className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${!isOpen && "scale-0"}`}>Basketball</h1>
    </div>
    <div className='inline-flex items-center'>
      <PiTennisBallFill className='text-white text-3xl rounded cursor-pointer block float-left mr-3' />
      <h1 className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${!isOpen && "scale-0"}`}>Tennis</h1>
    </div>
    <div className='inline-flex items-center'>
      <PiVolleyballFill className='text-white text-3xl rounded cursor-pointer block float-left mr-3' />
      <h1 className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${!isOpen && "scale-0"}`}>Volleyball</h1>
    </div>
    <div className='inline-flex items-center'>
      <PiFootballFill className='text-white text-3xl rounded cursor-pointer block float-left mr-3' />
      <h1 className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${!isOpen && "scale-0"}`}>Football</h1>
    </div>
    <div className='inline-flex items-center'>
      <PiBaseballFill className='text-white text-3xl rounded cursor-pointer block float-left mr-3' />
      <h1 className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${!isOpen && "scale-0"}`}>Baseball</h1>
    </div>
    <div className='inline-flex items-center'>
      <FaGolfBall className='text-white text-3xl rounded cursor-pointer block float-left mr-3' />
      <h1 className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${!isOpen && "scale-0"}`}>Golf</h1>
    </div>
    </>
  )
}

export default Sports
