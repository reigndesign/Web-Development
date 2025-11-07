// Custom Components
import FixtureTable from "../components/table";

import { BsArrowLeftCircle } from "react-icons/bs";
import { useState } from "react";
import {
  PiSoccerBallFill,
  PiBaseballFill,
  PiBasketballFill,
  PiTennisBallFill,
  PiFootballFill,
  PiVolleyballFill,
} from "react-icons/pi";
import { FaEnvelope, FaHeadset, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiGolfBallFill, RiFlashlightFill } from "react-icons/ri";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NavBar from "../components/navbar";
import SportsCarousel from "../components/carousel";
// 'swiper/css/autoplay' does not exist, so remove this line

function Sports() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar />
      <div className="ws-container">
        <div className="flex justify-between items-start gap-5">
          {/* Sidebar start here */}
          <div
            className={`ws-sidebar mt-5 bg-[#009966] ${
              isOpen ? "w-50" : "w-20"
            } p-5 pt-8 h-screen rounded-xs shadow-md duration-300 relative`}
          >
            <BsArrowLeftCircle
              className={`bg-white text-emerald-700 rounded-full text-3xl absolute -right-3 top-9 border border-emerald-300 ${
                !isOpen && "rotate-180"
              } cursor-pointer`}
              onClick={() => setIsOpen(!isOpen)}
            />
            <SportsSidebar isOpen={isOpen} />
          </div>
          <div className="ws-middle--container w-8/12 h-auto mt-5">
            {/* Slider for home carousel */}
            <div className="ws-middle--row rounded-xs">
              <SportsCarousel />
            </div>
            {/* League fixtures table  */}
            <div className="ws-middle--row h-10 bg-[#009966] mt-5 rounded">
              <div className="ws-livemathes--container flex items-center gap-5 pt-2">
                <div className="ws-live--matches flex items-center pl-3">
                  <RiFlashlightFill className="text-white text-2xl" />
                  <h1 className="text-sm text-white">Live Matches</h1>
                </div>
                <div className="flex items-center pl-3 gap-2">
                  <div className="ws-icon-soccerball">
                    <PiSoccerBallFill className="text-white text-2xl rounded cursor-pointer" />
                  </div>

                  <div className="ws-icon-basketball">
                    <PiBasketballFill className="text-white text-2xl rounded cursor-pointer" />
                  </div>

                  <div className="ws-icon-tenisball">
                    <PiTennisBallFill className="text-white text-2xl rounded cursor-pointer" />
                  </div>

                  <div className="ws-icon-volleyball">
                    <PiVolleyballFill className="text-white text-2xl rounded cursor-pointer" />
                  </div>

                  <div className="ws-icon-football">
                    <PiFootballFill className="text-white text-2xl rounded cursor-pointer" />
                  </div>

                  <div className="ws-icon-baseball">
                    <PiBaseballFill className="text-white text-2xl rounded cursor-pointer" />
                  </div>

                  <div className="ws-icon-golf">
                    <RiGolfBallFill className="text-white text-2xl rounded cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="leaguetable mt-5 bg-white rounded h-52">
              <FixtureTable />
            </div>
          </div>
          {/* Left sidebar start here */}
          <div className="ws-left-sidebar-container">
            <div
              className={`ws-left-sidebar bg-emerald-600 ${
                isOpen ? "h-50 w-60 mb-5" : "w-70"
              }  mt-5 mr-5 rounded-sm shadow-md duration-300`}
            >
              <div className="ws-sidebar-title h-auto">
                <h1 className="text-white text-lg font-light p-3 border-b-[1px]">
                  MY BETS
                </h1>
              </div>
              <div className="ws-sidebar-content p-3 text-white">
                <p>You have no bets at the moment</p>
              </div>
            </div>
            <ContactInfo isOpen={isOpen} />
          </div>
        </div>
      </div>
    </>
  );
}

function SportsSidebar({ isOpen }) {
  return (
    <>
      <div className="inline-flex items-center">
        <PiSoccerBallFill className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
        <h1
          className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${
            !isOpen && "scale-0"
          }`}
        >
          Soccer
        </h1>
      </div>
      <div className="inline-flex items-center">
        <PiBasketballFill className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
        <h1
          className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${
            !isOpen && "scale-0"
          }`}
        >
          Basketball
        </h1>
      </div>
      <div className="inline-flex items-center">
        <PiTennisBallFill className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
        <h1
          className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${
            !isOpen && "scale-0"
          }`}
        >
          Tennis
        </h1>
      </div>
      <div className="inline-flex items-center">
        <PiVolleyballFill className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
        <h1
          className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${
            !isOpen && "scale-0"
          }`}
        >
          Volleyball
        </h1>
      </div>
      <div className="inline-flex items-center">
        <PiFootballFill className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
        <h1
          className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${
            !isOpen && "scale-0"
          }`}
        >
          Football
        </h1>
      </div>
      <div className="inline-flex items-center">
        <PiBaseballFill className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
        <h1
          className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${
            !isOpen && "scale-0"
          }`}
        >
          Baseball
        </h1>
      </div>
      <div className="inline-flex items-center">
        <RiGolfBallFill className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
        <h1
          className={`text-white cursor-pointer origin-left font-light text-sm duration-200 ${
            !isOpen && "scale-0"
          }`}
        >
          Golf
        </h1>
      </div>
    </>
  );
}

function ContactInfo({ isOpen }) {
  return (
    <>
      <div
        className={`ws-left-sidebar bg-emerald-600 ${
          isOpen ? "w-60" : "w-70 mt-7"
        } h-50 mr-5 rounded-sm shadow-md duration-300`}
      >
        <div className="ws-sidebar-contact p-5 text-white ">
          <h1 className="text-lg font-light mb-2 border-b-[1px]">Need Help?</h1>
          <p className="text-sm">
            Contact our support team 24/7 for any questions you may have.
          </p>
          <div className="flex flex-row gap-5 justify-center items-center">
            <FaEnvelope className="mt-[15px] text-4xl" />
            <FaHeadset className="mt-[15px] text-4xl" />
            <FaWhatsapp className="mt-[15px] text-4xl" />
            <FaXTwitter className="mt-[15px] text-4xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sports;
