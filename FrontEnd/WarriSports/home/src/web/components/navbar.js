import { Link } from "react-router-dom";
import './assets/css/globalstyle.css'
import MainLogo from "./assets/images/WS--Logo__8.png";
import gift_icon from "./assets/icon/gift-outline.svg";
import { BiSearchAlt2 } from "react-icons/bi";
import settings_icon from "./assets/icon/settings-outline.svg";

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
            <ul className="ws-navBar-icon flex gap-1.5 px-3.5">
              <li className="ws-icon cursor-pointer">
                <img src={gift_icon} alt="gift icon" />
              </li>
              <li className="ws-icon cursor-pointer">
                <img src={settings_icon} alt="setting icon" />
              </li>
            </ul>
            {/* Login and Register buttons */}
            <ul className="ws-navBar--btn flex gap-3">
              <button className="ws-btn-login py-1.5 px-6 bg-[#ffffff] text-[#F70207] cursor-pointer">
                Login
              </button>
              <button className="ws-btn-register py-1.5 px-6 bg-emerald-600 hover:bg-emerald-800 text-white cursor-pointer transition-all">
                Register
              </button>
            </ul>
          </div>
        </div>
      </nav>
      {/* Top navbar ends here */}
      <nav className="ws-navbar-container p-[10px] bg-[#ffffff] h-12 shadow-b-lg items-center">
        <div className="ws-navBar flex items-center justify-between px-10">
          <ul className="ws-navBar--item flex flex-row items-center gap-[30px] text-black font-normal">
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
              Casino
            </Link>
            <Link to="/virtuals" className="ws-navBar--link">
              Virtuals
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
