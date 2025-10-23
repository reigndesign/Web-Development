import { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  PiHouseFill,
  PiBankFill,
  PiOfficeChairFill,
  PiArrowsLeftRightFill,
  PiCourtBasketballFill,
  PiSignOutFill,
} from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

function DashBoarSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        className={`ws-sidebar h-screen bg-[#009966] text-white ${
          isOpen ? "w-50" : "w-20"
        } p-5 pt-8 h-auto shadow-md duration-300 relative`}
      >
        <BsArrowLeftCircle
          className={`bg-white text-emerald-700 rounded-full text-3xl absolute -right-3 top-9 border border-emerald-300 ${
            !isOpen && "rotate-180"
          } cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="inline-flex items-center ">
          <PiHouseFill className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../admin/dashboard">
            <h1
              className={` cursor-pointer origin-left font-normal text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Overview
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <PiCourtBasketballFill className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../admin/sportbook">
            <h1
              className={` cursor-pointer origin-left font-normal text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Sportbook
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <PiArrowsLeftRightFill className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../admin/exchange">
            <h1
              className={` cursor-pointer origin-left font-normal text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Exchange
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <FaRegHandshake className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../admin/p2p">
            <h1
              className={` cursor-pointer origin-left font-normal text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Peer2Peer
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <PiBankFill className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../admin/account">
            <h1
              className={` cursor-pointer origin-left font-normal text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Account
            </h1>
          </Link>
        </div>

        <div className="inline-flex items-center">
          <PiOfficeChairFill className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../admin/career">
            <h1
              className={` cursor-pointer origin-left font-normal text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Career
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <MdOutlineSupportAgent className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../admin/support-ticket">
            <h1
              className={` cursor-pointer origin-left font-normal text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Support
            </h1>
          </Link>
        </div>
        <div className="border-t border-[#ff0000] flex items-center gap-4 my-3 py-3 mt-20">
          <PiSignOutFill className="w-8 h-8 rounded" />
          <div
            className={`flex justify-between items-center transition-all ${
              !isOpen && "scale-0"
            }`}
          >
            <div className="leading-4 ">
              <Link to="/" className="font-normal">
                Signout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoarSidebar;
