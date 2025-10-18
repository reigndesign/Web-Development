import { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { RiHome7Fill, RiSettings5Fill, RiExchangeDollarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PiHandDepositFill, PiHandWithdrawFill  } from "react-icons/pi";




function DashBoarSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        className={`ws-sidebar mt-10 bg-emerald-500 ${
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
          <RiHome7Fill className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="./">
            <h1
              className={`text-white cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Overview
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <PiHandDepositFill  className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="./deposit">
            <h1
              className={`text-white cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Deposit
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <RiExchangeDollarFill  className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="./transactions">
            <h1
              className={`text-white cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Transactions
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <PiHandWithdrawFill  className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="./withdraw">
            <h1
              className={`text-white cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Withdraw
            </h1>
          </Link>
        </div>

        <div className="inline-flex items-center">
          <PiHandWithdrawFill  className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="./referral">
            <h1
              className={`text-white cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Referral
            </h1>
          </Link>
        </div>
        <div className="inline-flex items-center">
          <RiSettings5Fill className="text-white text-3xl rounded cursor-pointer block float-left mr-3" />
          <Link to="./settings">
            <h1
              className={`text-white cursor-pointer origin-left font-light text-sm duration-200 hover:border-b-[1px] ${
                !isOpen && "scale-0"
              }`}
            >
              Settings
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DashBoarSidebar;
