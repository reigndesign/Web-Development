import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainLogo from '../assets/images/WS--Logo__8.png';
import Sports from './Sports';
import LiveBetting from './LiveBetting';
import P2pBetting from './P2pBetting';
import Virtuals from './Virtuals';
import AppDownload from './AppDownload';

function SideBar() {

  return (
    <>
      {/* Navigation */}
      <Router>
        <nav className='ws-nav p-[10px] bg-[#ff4b5a] h-30'>
          <div className='ws-navBar flex flex-row items-center justify-between px-[40px]'>
          {/* warriports Logo */}
            <a href='/sport'><img src={ MainLogo } alt="Warrisports Logo" className="logo h-[80px]" /></a>
            {/* Navbar links */}
            <ul className='ws-navBar--item flex flex-row items-center gap-[30px] text-white font-normal'>
              <Link to="/" className='ws-active ws-navBar--link'>DashBoard</Link>
              <Link to="/deposit" className='ws-navBar--link'>Deposit</Link>
              <Link to="/withdraw" className='ws-navBar--link'>Withdraw</Link>
              <Link to="/transaction" className='ws-navBar--link'>Trasactions</Link>
              <Link to="/app" className='ws-navBar--link'>App</Link>
            </ul>

          </div>
        </nav>
        {/* routes for sidebar */}
        <Routes>
          <Route path='/sport' element={<Sports />} />
          <Route path='/live' element={<LiveBetting />} />
          <Route path='/p2p-betting' element={<P2pBetting />} />
          <Route path='/virtuals' element={<Virtuals />} />
          <Route path='/app' element={<AppDownload />} />
        </Routes>
      </Router>
    </>
  )
}

export default SideBar