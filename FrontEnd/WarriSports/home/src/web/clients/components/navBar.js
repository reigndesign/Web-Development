import MainLogo from './assets/img/WS--Logo__8.png';


const NavBar = () => {
    return (
      <>
        <nav className='ws-leftsideBar bg-[#ff4b5a] h-20 flex-start justify-around items-center'>
          <div className='ws-sideBar flex flex-row items-center justify-between px-[40px]'>
          {/* warriports Logo */}
            <a href='/'><img src={ MainLogo } alt="Warrisports Logo" className="logo h-[80px]" /></a>
          </div>
        </nav>
      </>
    );
}


export default NavBar;