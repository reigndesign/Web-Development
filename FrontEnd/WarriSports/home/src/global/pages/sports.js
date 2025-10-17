// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowLeftCircle } from "react-icons/bs";
import { useState } from 'react';
import banner1 from '../components/assets/images/Banner--1-1.jpg';
import banner2 from '../components/assets/images/Banner--1-2.jpg';
import banner3 from '../components/assets/images/Banner--1-3.jpg';
import banner4 from '../components/assets/images/Banner--1-4.jpg';
import { PiSoccerBallFill, PiBaseballFill, PiBasketballFill, PiTennisBallFill, PiFootballFill, PiVolleyballFill } from "react-icons/pi";
import { FaEnvelope , FaHeadset, FaWhatsapp } from "react-icons/fa";
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
            <table className='ws-table w-full text-white'>
              <thead className='table-auto'>
                <tr className='flex items-center p-2'>
                  <img src='https://media.api-sports.io/football/leagues/39.png' alt='League Logo' className='w-6 h-6 rounded-full text-white'/>
                  <th className='p-3 text-left font-normal'>English Premier League</th>
                </tr>
              </thead>
              <div className='ws-event--table border-b border-emerald-300'>
                <thead className='ws-event--detail flex justify-start items-center gap-60'>
                  <th className='p-3 text-left font-extralight'>Matches</th>
                  <div className='ws-fixture--table flex items-center gap-30'>
                    <th className='p-3 font-light'>Full time result</th>
                    <th className='p-3 font-light'>Goals O/U</th>
                  </div>
                </thead>
              </div>
              <tbody>
                 <div className='border-b border-emerald-300 hover:bg-emerald-400 duration-300 cursor-pointer'>
                  <td className='text-left '>
                    <div className='inline-flex gap-2 items-center'>
                      <span className=' text-left p-3'>Time</span>
                      <div className='ws-teams flex gap-10 items-center'>
                        <div className='flex flex-col p-3'>
                          <span className='font-light text-sm'>Leeds United</span>
                          <span className='text-sm font-light'>Manchester City</span>
                        </div>
                        <div className='ws-fixture--data flex p-3 gap-1'>
                          <span className='px-[25px] py-1 rounded-l text-xs bg-emerald-600'>1</span>
                          <span className='px-[25px] py-[4px] text-xs bg-emerald-600'>X</span>
                          <span className='bg-emerald-600 px-[25px] py-1 rounded-r text-xs'>2</span>
                        </div>
                      </div>
                       <div className='ws-fixture--table flex items-center'>
                        <div className='ws-fixture--data inline-flex gap-1'>
                          <span className='px-[30px] py-1 rounded-l text-xs bg-emerald-600'>O</span>
                          <span className='bg-emerald-600 px-[30px] py-1 rounded-r text-xs'>U</span>
                        </div>
                      </div>
                    </div>
                  </td>
                </div>
               
              </tbody>
            </table>
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
      onSlideChange={() => { }} >

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
