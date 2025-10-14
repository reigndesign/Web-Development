// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowLeftCircle } from "react-icons/bs";
import { useState } from 'react';
import banner1 from './assets/images/Banner--1-1.jpg';
import banner2 from './assets/images/Banner--1-2.jpg';
import banner3 from './assets/images/Banner--1-3.jpg';
import banner4 from './assets/images/Banner--1-4.jpg';
import { PiSoccerBallFill, PiBaseballFill, PiBasketballFill, PiTennisBallFill, PiFootballFill, PiVolleyballFill } from "react-icons/pi";
import { FaGolfBall, FaEnvelope , FaHeadset, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiGolfBallFill, RiFlashlightFill } from "react-icons/ri";




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// 'swiper/css/autoplay' does not exist, so remove this line


function Sports() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <> 
    <div className="ws-container">
      <div className="flex justify-between items-start gap-5">
        <div className={`ws-sidebar mt-5 bg-emerald-500 ${isOpen ? "w-50" : "w-20"} p-5 pt-8 h-screen rounded-lg shadow-md duration-300 relative`}>
          <BsArrowLeftCircle className={`bg-white text-emerald-700 rounded-full text-3xl absolute -right-3 top-9 border border-emerald-300 ${!isOpen && "rotate-180"} cursor-pointer`} onClick={() => setIsOpen(!isOpen)} />
          <SportsSidebar isOpen={isOpen} />
        </div>
        <div className="ws-middle--container w-8/12 h-auto mt-5">
          <div className='ws-middle--row rounded'>
            <SportsCarousel />
          </div>
          <div className='ws-middle--row h-10 bg-emerald-500 mt-5 rounded'>
            <div className='ws-livemathes--container flex items-center gap-5 pt-2'>
              <div className='ws-live--matches flex items-center pl-3'>
                <RiFlashlightFill className='text-white text-2xl' />
                <h1 className='text-sm text-white'>Live Matches</h1>
              </div>
              <div className='flex items-center pl-3 gap-2'>
                <div className='ws-icon-soccerball'>
                  <PiSoccerBallFill className='text-white text-2xl rounded cursor-pointer'/>
                </div>

                <div className='ws-icon-basketball'>
                  <PiBasketballFill className='text-white text-2xl rounded cursor-pointer'/>
                </div>

                <div className='ws-icon-tenisball'>
                  <PiTennisBallFill className='text-white text-2xl rounded cursor-pointer'/>
                </div>

                <div className='ws-icon-volleyball'>
                  <PiVolleyballFill className='text-white text-2xl rounded cursor-pointer'/>
                </div>

                <div className='ws-icon-football'>
                  <PiFootballFill className='text-white text-2xl rounded cursor-pointer'/>
                </div>

                <div className='ws-icon-baseball'>
                  <PiBaseballFill className='text-white text-2xl rounded cursor-pointer'/>
                </div>

                <div className='ws-icon-golf'>
                  <RiGolfBallFill className='text-white text-2xl rounded cursor-pointer'/> 
                </div>
              </div>
            </div>
          </div>
          <div className='ws-middle--row h-85 bg-emerald-500 mt-5 rounded'>
            <h1>This Space belong to soccer arena</h1>
          </div>
        </div>
        
          <div className='ws-sidebar-container'>
            <div className={`ws-left-sidebar bg-emerald-600 ${isOpen ? "h-50 w-60 mb-5" : "w-70"}  mt-5 mr-5 rounded-sm shadow-md duration-300`}>
              <div className='ws-sidebar-title h-auto'>
                <h1 className='text-white text-lg font-light p-3 border-b-[1px]'>MY BETS</h1>
              </div>
              <div className='ws-sidebar-content p-3 text-white'>
                <p>You have no bets at the moment</p>
              </div>
            </div>
              <ContactInfo isOpen={isOpen}/>
        </div>
      </div>
    </div>
    </>
  )
}

function SportsCarousel() {

  return (

    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={2}
      onSlideChange={() => { }}
      onSwiper={(swiper) => { }} >

      <SwiperSlide >
        <img src={banner1} alt='Banner 1' className='rounded-sm' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt='Banner 2' className='rounded-sm' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt='Banner 3' className='rounded-sm' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner4} alt='Banner 4' className='rounded-sm' />
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
        <RiGolfBallFill className='text-white text-3xl rounded cursor-pointer block float-left mr-3' />
        <h1 className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${!isOpen && "scale-0"}`}>Golf</h1>
      </div>
    </>
  )
}

function ContactInfo({ isOpen }) {

  return (
    <>
    <div className={`ws-left-sidebar bg-emerald-600 ${isOpen ? "w-60" : "w-70 mt-7"} h-50 mr-5 rounded-sm shadow-md duration-300`}>
        <div className='ws-sidebar-contact p-5 text-white '>
            <h1 className='text-lg font-light mb-2 border-b-[1px]'>Need Help?</h1>
            <p className='text-sm'>Contact our support team 24/7 for any questions you may have.</p>
            <div className='flex flex-row gap-5 justify-center items-center'>
              <FaEnvelope className="mt-[15px] text-4xl"/>
              <FaHeadset className='mt-[15px] text-4xl' />
              <FaWhatsapp className='mt-[15px] text-4xl'/>
              <FaXTwitter className='mt-[15px] text-4xl'/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Sports
