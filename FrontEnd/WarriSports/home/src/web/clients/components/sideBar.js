import { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { RiHome7Fill, RiExchangeDollarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PiHandDepositFill, PiHandWithdrawFill } from "react-icons/pi";
import { FaUserCog } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MoreVertical } from "lucide-react";

function DashBoarSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        className={`ws-sidebar mt-10 bg-white text-gray-700 ${
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
          <RiHome7Fill className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../clients/dashboard">
            <h1
              className={` cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Overview
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <PiHandDepositFill className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../clients/deposit">
            <h1
              className={` cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Deposit
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <RiExchangeDollarFill className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../clients/transactions">
            <h1
              className={` cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Transactions
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <PiHandWithdrawFill className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../clients/withdraw">
            <h1
              className={` cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Withdraw
            </h1>
          </Link>
        </div>

        <div className="inline-flex items-center">
          <HiMiniUserGroup className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../clients/referral">
            <h1
              className={` cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Referral
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <FaUserCog className=" text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="../clients/settings">
            <h1
              className={` cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Settings
            </h1>
          </Link>
        </div>
        <div className="border-t border-[#ff0000] flex items-center gap-4 my-3 py-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-full"
          />

          <div
            className={`flex justify-between items-center transition-all ${
              !isOpen && "scale-0"
            }`}
          >
            <div className="leading-4 ">
              <h4 className="font-light">Balance</h4>
              <span className="text-xs text-gray-600 ">NGN 0.00</span>
            </div>
            <MoreVertical size={20} className="cursor-pointer " />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoarSidebar;
