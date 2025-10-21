import { Link } from "react-router-dom";
import './assets/css/globalstyle.css'
import MainLogo from "./assets/images/WS--Logo__8.png";
import { BiSearchAlt2, BiSupport  } from "react-icons/bi";



function NavBar() {
  return (
    <>
      {/* Navigation */}
      <nav className="ws-nav px-[10px] bg-[#F70207] h-15">
        <div className="ws-navBar flex flex-row items-center justify-between px-[40px]">
          <a href="/">
            <img
              src={MainLogo}
              alt="Warrisports Logo"
              className="logo h-[60px]"
            />
          </a>
          {/* Navbar Icons Set and button */}
          <div className="flex items-center">
            
            {/* Login and Register buttons */}
            <ul className="ws-navBar--btn flex gap-3">
              <button className="ws-btn-login py-1.5 px-6 bg-[#ffffff] text-[#F70207] cursor-pointer">
                Login
              </button>
              <button className="ws-btn-register py-1.5 px-6 bg-emerald-600 hover:bg-emerald-800 text-white cursor-pointer transition-all">
                Register
              </button>
            </ul>
            <ul className="ws-navBar-icon flex gap-1.5 px-3.5 items-center">
              <Link to="/support" className="ws-icon flex items-center gap-1.5 bg-[#f7f7f7ab] cursor-pointer text-white text-lg py-1 px-5 hover:bg-[#f7f7f79a]">
                <BiSupport  /> <span className="text-normal">Live Support</span>
              </Link>
              {/* <li className="ws-icon cursor-pointer text-white text-lg">
                <BiCog />
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* Top navbar ends here */}
      <nav className="ws-navbar-container p-[10px] bg-[#ffffff] h-12 shadow-b-lg items-center">
        <div className="ws-navBar flex items-center justify-between px-10">
          <ul className="ws-navBar--item flex flex-row items-center gap-[30px] text-black font-normal uppercase">
            <Link to="/sport" className="ws-active ws-navBar--link">
              Sports
            </Link>
            <Link to="/live" className="ws-navBar--link">
              Live Betting
            </Link>
            <Link to="/p2p-betting" className="ws-navBar--link">
              P2P Betting
            </Link>
            <Link to="/casino" className="ws-active ws-navBar--link">
              Live Casino
            </Link>
            <Link to="/virtuals" className="ws-navBar--link">
              Virtual
            </Link>
            <Link to="/promotions" className="ws-navBar--link">
              Promotions
            </Link>
            <Link to="/app" className="ws-navBar--link">
              App
            </Link>
          </ul>
          <ul className="ws-icons">
            <li className="ws-icon cursor-pointer flex gap-2 items-center">
              <input
                type="search"
                name="search"
                placeholder="search..."
                className="p-0.5 outline-0 border"
              />
              <BiSearchAlt2 className="text-2xl"/>
            </li>
          </ul>
        </div>
      </nav>
      {/* bottom navbar ends here */}
    </>
  );
}

export default NavBar;
