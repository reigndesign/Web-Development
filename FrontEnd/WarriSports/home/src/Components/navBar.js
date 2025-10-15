import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import MainLogo from './assets/images/WS--Logo__8.png'
import gift_icon from './assets/icon/gift-outline.svg'
import search_icon from './assets/icon/search-v2.svg'
import settings_icon from './assets/icon/settings-outline.svg'
import Sports from '../Pages/sports'
import LiveBetting from '../Pages/liveBetting'
import P2pBetting from '../Pages/p2pBetting'
import Virtuals from '../Pages/virtuals'
import AppDownload from '../Pages/appDownload'

function NavBar() {

  return (
    <>
      {/* Navigation */}
      <Router>
        <nav className='ws-nav p-[10px] bg-[#ff4b5a] h-30'>
          <div className='ws-navBar flex flex-row items-center justify-between px-[40px]'>
            <a href='/sport'><img src={ MainLogo } alt="Warrisports Logo" className="logo h-[80px]" /></a>
            <ul className='ws-navBar--item flex flex-row items-center gap-[30px] text-white font-normal'>
              <Link to="/sport" className='ws-active ws-navBar--link'>Sports</Link>
              <Link to="/live" className='ws-navBar--link'>Live Betting</Link>
              <Link to="/p2p-betting" className='ws-navBar--link'>P2P Betting</Link>
              <Link to="/virtuals" className='ws-navBar--link'>Virtuals</Link>
              <Link to="/app" className='ws-navBar--link'>App</Link>
            </ul>

            <ul className='ws-navBar-icon flex flex-row ml-70 items-center gap-[10px] '>
              <li className='ws-icon cursor-pointer'><img src={ gift_icon } alt='gift icon'/></li>
              <li className='ws-icon cursor-pointer'><img src={ search_icon } alt='search icon'/></li>
              <li className='ws-icon cursor-pointer'><img src={ settings_icon } alt='setting icon'/></li>
            </ul>
            <ul className='ws-navBar--btn flex flex-row items-center gap-[10px] '>
              <button className='ws-btn-register py-[7px] px-[30px] bg-emerald-600 hover:bg-emerald-800 text-white rounded-sm cursor-pointer transition-all'>Register</button>
              <button className='ws-btn-login py-[7px] px-[30px] bg-[#fff] text-[#ff4500] rounded-sm cursor-pointer'>Login</button>
            </ul>
          </div>
        </nav>

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

export default NavBar
